require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // 1. BU MÜTLƏQDİR!
const User = require("./models/User"); 

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB-yə uğurla qoşuldu!"))
  .catch((err) => console.log("Bazaya qoşulma xətası:", err));

// --- REGISTER ---
app.post("/register", async (req, res) => {
  const { user, pwd, email } = req.body;

  try {
    const existingUser = await User.findOne({ user });
    const existingEmail = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Bu istifadəçi adı artıq götürülüb!" });
    }
    if (existingEmail) {
      return res.status(409).json({ message: "Bu email ilə artıq qeydiyyatdan keçilib!" });
    }

    // Parolu zirehləyirik
    const hashedPassword = await bcrypt.hash(pwd, 10);

    const newUser = await User.create({
      user: user,
      email: email,
      pwd: hashedPassword,
    });

    console.log(`UĞURLU QEYDİYYAT: ${newUser.user}`);
    res.status(201).json({ success: true, message: "Hesab yaradıldı!" });

  } catch (error) {
    res.status(500).json({ message: "Server xətası baş verdi." });
  }
});

// --- LOGIN ---
app.post("/login", async (req, res) => {
  const { email, pwd } = req.body;

  try {
    const foundUser = await User.findOne({ email });
    
    // Əvvəlcə istifadəçini yoxlayırıq
    if (!foundUser) {
      return res.status(401).json({ message: "İstifadəçi tapılmadı!" });
    }

    // İstifadəçi varsa, parolu yoxlayırıq
    const match = await bcrypt.compare(pwd, foundUser.pwd);

    if (match) {
      res.json({ message: "Xoş gəldin!", user: foundUser.user });
    } else {
      res.status(401).json({ message: "Parol səhvdir!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Giriş zamanı xəta oldu." });
  }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server mühərriki ${PORT} portunda işləyir...`);
});