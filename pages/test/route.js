import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";;
import { authOptions } from "../api/auth/route";

export async function GET(request) {
    const session = await getServerSession(authOptions)
    
    return NextResponse.json({authenticated: !!session})
}