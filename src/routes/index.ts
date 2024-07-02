import { Router, Request, Response } from "express";

import { validationResult } from "express-validator";
import { createValidator } from "../validate/validator";
import IUser from "../interfaces/IUser";

const router: Router = Router();

router.post(
  "/user",
  createValidator,
  (req: Request<{}, {}, IUser>, res: Response) => {
    const errors = validationResult(req);
    console.log("req.body.userName", req.body.email);
    if (errors.isEmpty()) {
      return res.status(201).json({ message: "success" });
    }
    res.status(422).json({ errors: errors.array() });
  }
);

export default router;
