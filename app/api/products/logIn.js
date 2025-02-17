// pages/api/login.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Método no permitido" });
    }
  
    const { username, password } = req.body;
  
    
    if (username === "admin" && password === "1234") {
      
      res.setHeader(
        "Set-Cookie",
        "auth-token=mi-token-secreto; Path=/; HttpOnly; SameSite=Strict"
      );
      return res.status(200).json({ message: "Login exitoso" });
    } else {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  }
  