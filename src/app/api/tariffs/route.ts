import { NextResponse } from "next/server";
import axios from "axios";

export  async function GET() {
  try {
    const res = await axios.get("https://t-core.fit-hub.pro/Test/GetTariffs", {
      headers: {
        "Content-Type": "application/json",
      },
    });
   
  
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("Error fetching tariffs:", error);
    return NextResponse.json(
      { error: "Failed to fetch tariffs" },
      { status: 500 }
    );
  }
};
