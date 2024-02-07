import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]/route.js/index.js";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <h1>
      reservation app
    </h1>
  )
}