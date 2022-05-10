import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "664493cb042e65",
      pass: "7a169b0232f128",
    },
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Thalys Silva <thalysfarias11@hotmail.com>",
      subject: subject,
      html: body,
    });
  }
}
