import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/login",
        { email, pwd },
        { headers: { "Content-Type": "application/json" } }
      );
      setSuccess(true);
      setEmail("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Server cavab vermir. İnterneti yoxla!");
      } else if (err.response?.status === 401) {
        setErrMsg("Email və ya parol səhvdir!");
      } else {
        setErrMsg("Giriş uğursuz oldu.");
      }
    }
  };

  return (
    <div className="auth-container">
      {success ? (
        <section>
          <h1>Xoş gəldin!</h1>
          <p>Sistemə daxil oldun.</p>
        </section>
      ) : (
        <section>
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <h1>Giriş Et</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Parol:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button disabled={!email || !pwd }>Daxil Ol</button>
            <p>
              Hesabın yoxdur?{" "}
              <span className="line">
                <Link to="/">Qeydiyyat</Link>
              </span>
            </p>
          </form>
        </section>
      )}
    </div>
  );
};

export default Login;