import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return <span onClick={() => router.back()}>Click here to go back</span>;
};

export default Navbar;
