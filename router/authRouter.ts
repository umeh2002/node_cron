import { Router } from "express";
import {
  createAuth,
  viewOneUser,
  viewUsers,
} from "../Controller/authController";

const router = Router();

router.route("/create").post(createAuth);
router.route("/:userID/view-one").get(viewOneUser);
router.route("/view-all").get(viewUsers);

export default router;
