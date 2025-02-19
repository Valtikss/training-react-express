import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.json({ message: "Bonjour de Exprès !" });
});

export default router;
