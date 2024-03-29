import { redirect, type Handle } from "@sveltejs/kit";
// import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.route.id === "/projects") {
		throw redirect(302, "/#work");
	}

	let theme = "system";

	const cookieTheme = event.cookies.get("colorTheme");
	if (cookieTheme) theme = cookieTheme;
	event.locals.theme = cookieTheme ?? theme;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%datatheme%", theme),
	});

	return response;
};
