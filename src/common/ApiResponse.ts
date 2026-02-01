import { ApiCode } from "@/enum/enum";

export interface ResponseResult<T> {
  code: number;
  msg: string;
  data?: T;
}
export default class R<T = undefined> {
  code: number;
  msg: string;
  data?: T;
  private constructor(code: number, msg: string, data?: T) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  static ok<U = undefined>(msg: string, data?: U): ResponseResult<U> {
    return data === undefined
      ? new R(ApiCode.SUCCESS, msg).toObject()
      : new R(ApiCode.SUCCESS, msg, data).toObject();
  }
  static error<V = undefined>(msg: string, data?: V): ResponseResult<V> {
    return data === undefined
      ? new R(ApiCode.ERROR, msg).toObject()
      : new R(ApiCode.ERROR, msg, data).toObject();
  }
  private toObject() {
    return {
      code: this.code,
      msg: this.msg,
      data: this.data,
    };
  }
}
