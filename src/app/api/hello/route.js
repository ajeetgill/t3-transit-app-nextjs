/**
 * src/app/api/route.js
 *
 * This is a simple api - called on `http://localhost:3000/api` route
 * from my understanding about the nextjs so far - whatever name you want your api-url-segment to be, you make a folder with that name in the `src/app/api` folder and then you create a `route.js` file in that folder and then you export a function with the name of the http-method(GET, POST) you want to use.
 */
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Hello World - hello.js" });
}
