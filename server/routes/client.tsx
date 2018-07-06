import * as React from "react";
import * as express from "express";
import { renderToString } from "react-dom/server";
import Hello from "../../client/src/components";
const router = express.Router();

router.get("/", (req: any, res: any) => {
    const reactDom = renderToString(<Hello compiler="TypeScript" framework="React" />);
    res.status(200).render("./index.html", {reactDom});
});

export default router;
