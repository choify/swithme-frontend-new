import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const signInHandler = async (req: NextRequest) => {
  const { email, password } = await req.json();

  try {
    const fetchRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await fetchRes.json();

    if(data.status !== 200) {
      return new NextResponse(JSON.stringify({ error: data.message }), { status: data.status });
    }

    const response = new NextResponse(null, { status: 200 });

    cookies().set({
      name: 'accessToken',
      value: data.data.accessToken,
      httpOnly: false,
      path: '/',
    });

    cookies().set({
      name: 'refreshToken',
      value: data.data.refreshToken,
      httpOnly: false,
      path: '/',
    });


    return response;
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), { status: 500 });
  }
};

export { signInHandler as POST };
