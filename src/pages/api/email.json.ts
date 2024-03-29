import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const success = `<div id="contact-me" class="thank"><span>Thank you very much!</span></div>`;

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	const send = await resend.emails.send({
		from: 'Portfolio site <onboarding@resend.dev>',
		to: 'delivered@resend.dev',
		subject: `New message from: ${name} (${email})`,
		html: `<p>${message}</p>`,
	});

	if (send.data) {
		return new Response(success);
	} else {
		return new Response(
			JSON.stringify({
				message: send.error,
			}),
			{
				status: 500,
				statusText: 'Internal Server Error',
			}
		);
	}
};
