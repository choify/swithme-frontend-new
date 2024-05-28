import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const signInHandler = async (req: NextRequest) => {
  const { email, password } = await req.json();

  try {
    const fetchRes = await fetch('http://3.37.237.39:8080/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await fetchRes.json();
    console.log(data);

    if(data.status !== 200) {
      return new NextResponse(JSON.stringify({ error: data.message }), { status: data.status });
    }

    const response = new NextResponse(null, { status: 200 });

    cookies().set({
      name: 'accessToken',
      value: data.data.accessToken,
      httpOnly: true,
      path: '/',
    });

    cookies().set({
      name: 'refreshToken',
      value: data.data.refreshToken,
      httpOnly: true,
      path: '/',
    });


    return response;
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error }), { status: 500 });
  }
};

export { signInHandler as POST };
