import React from "react";
import { useRouter } from "next/router";

function User({ id }) {
  //const router = useRouter();
  return <div>The user with ID: {id}</div>;
}

export default User;

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
