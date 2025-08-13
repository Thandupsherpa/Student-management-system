export function userLogin(req, res) {
 
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

 
  const ip = req.ip;a
  const blockedIps = ["123.45.67.89"]; 
  if (blockedIps.includes(ip)) {
    return res.status(403).json({ error: "Too many attempts. Try later." });
  }


  const safeUsername = username.replace(/[^a-zA-Z0-9]/g, "");


  if (safeUsername === "admin" && password === "1234") {
    return res.status(200).json({ message: "Login successful" });
  }

 
  res.status(401).json({ error: "Invalid username or password" });
}
