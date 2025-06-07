import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json(); // Get form data from request

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email app password
            },
        });

        const mailOptions = {
            from: body.email,
            to: process.env.EMAIL_USER, // Your receiving email
            subject: "New Contact Form Submission",
            text: `
                Name: ${body.name}
                Company: ${body.company}
                Address: ${body.address}
                City: ${body.city}
                State: ${body.state}
                Pincode: ${body.pincode}
                Phone: ${body.phone}
                Email: ${body.email}
                Message: ${body.message}
            `,
        };

        await transporter.sendMail(mailOptions);
        
        return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Error sending email", error }, { status: 500 });
    }
}
