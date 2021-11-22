export default function enviar(req, res) {
  let nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "valdisneidev@gmail.com",
      pass: process.env.SECRET,
    },
  });

  transporter
    .sendMail({
      from: "Valdisnei Nilo <valdisneidev@gmail.com>",
      to: "valdisneidev@gmail.com",
      subject: `Construção de ${req.body.projeto}`,
      text: ``,
      html: `<div>${req.body.nome}</div><div>${req.body.telefone}</div><div>${req.body.email}</div><div>${req.body.projeto}</div>`,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
}
