import R from "@/common/ApiResponse";
import ExceptionHandler from "@/common/ExceptionHandler";
import { login } from "@/services/user.service";
import { $UserDTO } from "@/types/dto.types";
import { NextRequest, NextResponse } from "next/server";

export const POST = ExceptionHandler(async (req: NextRequest) => {
  const userInfo = await req.json();
  const validation = $UserDTO.safeParse(userInfo);
  if (!validation.success) {
    return NextResponse.json(R.error("输入格式不正确"), { status: 400 });
  }
  const user = await login(userInfo);
  return NextResponse.json(R.ok("登陆成功", user));
});
export const GET = POST;
