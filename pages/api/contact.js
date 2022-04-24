import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  console.log(email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: "adhir229@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Message: </strong> ${message} </p>

      `,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(201).json({
    mess: `Message sent successfully`,
  });
};
