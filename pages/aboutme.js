import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Aboutme() {
  const router = useRouter();

  const redirect = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>About me page</h1>
      <Link href="/">Go Home</Link>
      <button onClick={redirect}>Click me</button>
    </div>
  );
}

export default Aboutme;
