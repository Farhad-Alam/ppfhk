import nc from "next-connect";
import { User } from "../../../models/userModel";

import bcrypt from "bcrypt";
import { connectDB } from "../../../utils/db";

connectDB();
const handler = nc();

handler.post(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        mess: "User already exists",
      });
    }

    user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    res.status(200).json({
      success: true,
      mess: "User Created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mess: error.message,
    });
  }
});

export default handler;
