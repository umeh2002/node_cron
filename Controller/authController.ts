import { Request, Response } from "express";
import { mail } from "./email";
import authModel from "../Model/authModel";

export const createAuth = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await authModel.create({ email, name });

    mail(user);

    return res.status(201).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error viewing one user",
      data: error.message,
    });
  }
};

export const viewOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await authModel.findById(userID);

    return res.status(201).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error creating auth",
      data: error.message,
    });
  }
};

export const viewUsers = async (req: Request, res: Response) => {
  try {
    const user = await authModel.find();

    return res.status(201).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error viewing users",
      data: error.message,
    });
  }
};
