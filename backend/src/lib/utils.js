import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks. It is http only so this token is not accessible through js
    sameSite: "strict", // prevent CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // if we are in production, connection is secure (i.e. https) else not secure (i.e. http://localhost)
  });

  return token;
};
