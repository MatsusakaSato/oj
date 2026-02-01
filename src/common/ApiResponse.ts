import { ApiCode } from "@/enum/enum";

export default class R<T = void> {
  code: number;
  msg: string;
  data?: T;
  private constructor(code: number, msg: string, data?: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  static ok<U = void>(msg: string, data?: U): R<U> {
    return data === undefined
      ? new R(ApiCode.SUCCESS, msg)
      : new R(ApiCode.SUCCESS, msg, data);
  }
  static error<V = void>(msg: string, data?: V): R<V> {
    return data === undefined
      ? new R(ApiCode.ERROR, msg)
      : new R(ApiCode.ERROR, msg, data);
  }
}
