import { NextResponse } from "next/server";

export const GET = async (req) => {
  //fetch

  return new NextResponse("Hello World", { status: 200 });
};
