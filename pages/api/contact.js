let nodemailer = require("nodemailer");
export default function enviar(req, res) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: "valdisneidev@gmail.com",
      pass: process.env.PASS
    },
  });

  transporter.sendMail({
    from: "valdisneidev@gmail.com",
    replyTo: `${req.body.email}`,
    to: "valdisneidev@gmail.com",
    subject: `Contato site`,
    text: ``,
    html: `
    <div>${req.body.nome}</div>
    <div>${req.body.telefone}</div>
    <div>${req.body.email}</div>
    `,
  })
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((error) => {
    res.status(500).send(error);
    console.log(error);
  });
  

}
