import ContactFormEmail from "@/components/contact/contact-form-email";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const { email, message } = await request.json();

	if (!email || !message) {
		return new Response("Email and message are required", { status: 400 });
	}

	try {
		const data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "valley_rob.0c@icloud.com",
			reply_to: email,
			subject: "Message from your website",
			react: ContactFormEmail({ message, email }),
		});
		revalidatePath("/");
		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
