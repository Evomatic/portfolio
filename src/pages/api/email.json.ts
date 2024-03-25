import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async ({ params, request }) => {
	console.log(params);
	console.log(request);
	const send = await resend.emails.send({
		from: 'evantrujillo30@gmail.com',
		to: 'evantrujillo30@gmail.com',
		subject: 'test subject',
		html: '<p>Sample email sent</p>',
		text: 'Hi there',
	});

	// try {
	// 	return new Response(JSON.stringify({ message: send.data }));
	// } catch (error) {
	// 	return new Response(JSON.stringify({ message: send.error }));
	// }

	if (send.data) {
		return new Response(JSON.stringify({ message: send.data }), { status: 200, statusText: 'OK' });
	} else {
		return new Response(JSON.stringify({ message: send.error }), {
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
};
