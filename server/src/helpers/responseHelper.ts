import { Response } from "express";

export default class ResponseHelper {
  static response(
    {
      res,
      code,
      success,
      message,
      data,
    }: { res: Response, code: number, success: boolean, message: string, data: any }) {
    return res.status(code).json({ success, message, data });
  }

  static error({ res, err, status = 400 }: { res: Response, err: any, status?: number }) {
    return res.status(status).json({ err });
  }
}
