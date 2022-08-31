import { Request, Response } from "express";
import { usersFight } from "../services/battleService";

export async function battlePost(req: Request, res: Response){
    const {firstUser, secondUser} = req.body;
    const response = await usersFight(firstUser, secondUser);
    console.log(response);
    res.send(response);
}