import nc from "next-connect";
import { User } from "../../../models/userModel";
import bcrypt from "bcrypt";
import { sendToken } from "../../../utils/auth";
import { connectDB } from "../../../utils/db";

connectDB();
const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = sendToken(user);

    const { name, email } = user;

    res.status(200).json({
      success: true,
      user: {
        name,
        email,
      },
      token,
    });
  } else {
    res.status(401).json({ success: false, mess: "Invalid Email or Password" });
  }
});

export default handler;
