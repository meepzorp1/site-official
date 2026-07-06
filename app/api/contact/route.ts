import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        await resend.emails.send({
            from: "Website <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject,
            html: `
                <h2>New Contact Form</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>

                <hr/>

                <p>${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);

        return Response.json(
            { success: false },
            { status: 500 }
        );
    }
}