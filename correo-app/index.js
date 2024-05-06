const nodemailer = require("nodemailer");
require('dotenv').config({ path: 'credenciales.env' });

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

class CorreoElectronico {
    constructor(nombre, destinatario, asunto, textoCorreo){
        this.nombre = nombre
        this.destinatario = destinatario
        this.asunto = asunto
        this.textoCorreo = textoCorreo
    }

    async enviarEmail(){
        const info = await transporter.sendMail({
            from: `${this.nombre} <3rick694@gmail.com>`,
            to: this.destinatario,
            subject: this.asunto,
            text: `${this.textoCorreo}`,
        });

        console.log("Message sent: %s", info.messageId);
    }
}

let correo1 = new CorreoElectronico('Erick Martinez', 'j.william03@hotmail.com','Pude Ing.','Ya tengo mi tarea lista para subir ')

correo1.enviarEmail()
    .then(() => {console.log("correo enviado exitosamente")})
    .catch(error => console.error(`Error al enviar el correo: ${error}`))