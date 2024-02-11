import { notFound } from "next/navigation";

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";
import { NextResponse } from "next/server";

async function getReviews() {
  const res: any = await fetch(`https://app-router-api.vercel.app/api/reviews`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const reviews = (await res.json()) as String[];

  if (reviews.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return reviews;
}

export async function GET() {
  try {
    const data = await getReviews();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }
    return new NextResponse(e.message, { status: 500 });
  }
}
