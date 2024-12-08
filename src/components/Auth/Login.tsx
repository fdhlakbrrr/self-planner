"use client";

// import { MutableRefObject, useEffect, useRef } from "react";

export default function Login() {
  // const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);

  // const params = {
  //   client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //   redirect_uri: "http://localhost:3000/test",
  //   response_type: "token",
  //   scope: "https://www.googleapis.com/auth/userinfo.profile profile email",
  //   include_granted_scopes: "true",
  //   state: "pass-through value",
  // };

  // useEffect(() => {
  //   if (formRef.current) {
  //     formRef.current.submit();
  //   }
  // }, [formRef.current]);

  return (
    <form
      // ref={formRef}
      action="https://accounts.google.com/o/oauth2/v2/auth"
      method="GET"
    >
      {/* {Object.entries(params).map(([key, val]) => (
        <input key={key} type="hidden" name={key} value={val} />
      ))} */}
    </form>
  );
}
