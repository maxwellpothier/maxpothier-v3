import { NextResponse } from "next/server";

const loggedInPages = [
	"/",
	"/post",
	"/profile"
];

const loggedInRestricted = [
	"/signup",
	"/login",
];

export default function middleware(req) {
	if (loggedInPages.find(p => p === req.nextUrl.pathname)) {
		const token = req.cookies.WT_ACCESS_TOKEN;

		if (!token) {
			return NextResponse.redirect(`${req.nextUrl.origin}/login`);
		}
	}

	if (loggedInRestricted.find(p => p === req.nextUrl.pathname)) {
		const token = req.cookies.WT_ACCESS_TOKEN;

		if (token) {
			return NextResponse.redirect(`${req.nextUrl.origin}/`);
		}
	}
};