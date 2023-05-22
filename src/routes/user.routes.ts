import UserController from "../controllers/user.controller";
import { Router } from "express";

class UserRoutes {
  public userController = new UserController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/user", this.userController.registerUser);
  }
}

export default UserRoutes;
