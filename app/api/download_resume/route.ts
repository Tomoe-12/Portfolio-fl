import { NextRequest } from "next/server";
import { Resume_link } from '@/data/personal';
export async function GET(req: NextRequest) {
  const fileUrl = Resume_link;
  const response = await fetch(fileUrl);

  if (!response.ok) {
    return new Response("Failed to fetch file", { status: 500 });
  }

  const arrayBuffer = await response.arrayBuffer();
  const contentType = response.headers.get("Content-Type") || "application/octet-stream";

  return new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": "attachment; filename=Khun_Thi_Han_Resume.pdf",
      "Content-Length": arrayBuffer.byteLength.toString(),
    },
  });
}
