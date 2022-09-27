import {NextResponse} from "next/server";

const pagesToProtect = [
	"/",
];

export default function middleware(req) {
	if (pagesToProtect.find((page) => page === req.nextUrl.pathname)) {
		const token = req.cookies.WT_ACCESS_TOKEN;

		if (!token) {
			return NextResponse.redirect(`${req.nextUrl.origin}/login`);
		}
	}
}