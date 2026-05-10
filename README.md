# 🔐 MERN Stack Authentication System

Bu layihə, modern Full Stack yanaşması ilə hazırlanmış təhlükəsiz istifadəçi qeydiyyatı və giriş sistemidir. Həm frontend, həm də backend tərəfində təmiz kod strukturuna üstünlük verilmişdir.

## 🏗️ Layihə Strukturu
Layihə iki əsas hissədən ibarətdir:
- **Client (Frontend):** React.js ilə qurulmuş dinamik interfeys.
- **Server (Backend):** Node.js və Express.js ilə qurulmuş REST API.

## 🛠️ Texniki Stack
| Texnologiya | İstifadə Məqsədi |
| :--- | :--- |
| **React.js** | Komponent əsaslı istifadəçi interfeysi |
| **Node.js & Express** | Server tərəfi məntiqi və API idarəetməsi |
| **MongoDB** | NoSQL verilənlər bazası |
| **Bcrypt.js** | Şifrələrin təhlükəsiz şəkildə hash-lənməsi |
| **Dotenv** | Ətraf mühit dəyişənlərinin gizli saxlanılması |

## 🛡️ Təhlükəsizlik Xüsusiyyətləri
- **Password Hashing:** Şifrələr bazaya Bcrypt alqoritmi ilə hash-lənərək yazılır.
- **Environment Variables:** Verilənlər bazası linkləri `.env` faylında gizli saxlanılır.
- **Input Validation:** İstifadəçi məlumatlarının düzgünlüyü server tərəfində yoxlanılır.

## 🚀 Quraşdırma
1. Reponu klonlayın.
2. `backend-server` qovluğunda `npm install` edib serveri başladın.
3. `Register` qovluğunda `npm install` edib frontend-i başladın.

## 📈 Gələcək Planlar
- [ ] JWT (JSON Web Token) ilə sessiya idarəetməsi.
- [ ] İstifadəçi profili səhifəsi.