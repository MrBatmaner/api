import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

import Link from "next/link";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ name }) {
  //CLIENT SIDE RENDERING

  //const [name, setName] = useState("");

  //useEffect(() => {
  //fetch("http://localhost:3002/api/hello")
  //.then((res) => res.json())
  //.then((data) => setName(data.name));
  //}, []);
  return (
    <div>
      <Head>
        <title>Api</title>
      </Head>
      <h1>Api App</h1>
      <h2>Your name is: {name}</h2>
      <Link href="/aboutme">About Me</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const name = await fetch("http://localhost:3002/api/hello")
    .then((res) => res.json())
    .then((data) => data.name);

  return {
    props: {
      name,
    },
  };
}
