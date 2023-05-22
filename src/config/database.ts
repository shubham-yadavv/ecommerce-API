import mongoose from "mongoose";
import config from "./index";

export default class Database {
  public async connect(): Promise<void> {
    try {
      const databaseURL = config.databaseURL as string;
      await mongoose.connect(databaseURL, {});
      console.log("Database connected");
    } catch (error) {
      console.log(error);
    }
  }
}
