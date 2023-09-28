import { Response } from "express";

export default class ResponseHelper {
  static response({
                    res,
                    code,
                    success,
                    message,
                    data,
                  }: { res: Response, code: number, success: boolean, message: string, data: any }) {
    return res.status(code).json({ success, message, data });
  }

  static error({ res, err }: { res: Response, err: any }) {
    return res.status(400).json({ err });
  }
}
