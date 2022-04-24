import jwt from "jsonwebtoken";

export const sendToken = (user) => {
  const { _id, name, email } = user;

  return jwt.sign({ _id, name, email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
