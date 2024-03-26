import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	const send = await resend.emails.send({
		from: 'Portfolio site <no-reply@evantrujillo.com>',
		to: 'evantrujillo30@gmail.com',
		subject: `New message from: ${name} (${email})`,
		html: `<p>${message}</p>`,
	});

	try {
		return new Response(JSON.stringify({ message: send.data }), { status: 200, statusText: 'OK' });
	} catch (error) {
		return new Response(JSON.stringify({ message: send.error }), {
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
};
