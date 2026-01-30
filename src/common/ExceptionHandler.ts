import R from "./ApiResponse";
import { NextResponse } from "next/server";

export default function ExceptionHandler(handler: Function) {
  return async (...args: unknown[]) => {
    try {
      return await handler(...args);
    } catch (error: unknown) {
      const errorMsg = error instanceof Error ? error.message : "未知错误";
      return NextResponse.json(R.error(errorMsg));
    }
  };
}
