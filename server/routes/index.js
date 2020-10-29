import express from "express";
import hello from "./hello";
import signIn from "./signIn";
import signUp from "./signUp";
import signOut from "./signOut";
import issue from "./issue";

const router = express.Router();

router.use("/hello", hello);
router.use("/signIn", signIn);
router.use("/signUp", signUp);
router.use("/signOut", signOut);
router.use("/issue", issue);

export default router;
