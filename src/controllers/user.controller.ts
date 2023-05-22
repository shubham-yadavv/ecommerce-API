import UserService from "../services/user.service";
import { Request, Response } from "express";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public registerUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password, name } = req.body;
    try {
      const result = await this.userService.registerUser(email, password, name);
      res.status(result.status).json(result.data);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default UserController;
