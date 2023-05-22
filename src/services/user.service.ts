import User from "../models/user.model";
import { generateToken } from "../utils/jwt.util";

class UserService {
  public async registerUser(email: string, password: string, name: string) {
    const user = await User.create({ email, password, name });
    const token = generateToken({ id: user._id }, { expiresIn: "1d" });
    return { status: 201, data: { user, token } };
  }

  public async loginUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      return { status: 404, data: { message: "User not found" } };
    }
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return { status: 401, data: { message: "Invalid password" } };
    }
    const token = generateToken({ id: user._id }, { expiresIn: "1d" });
    return { status: 200, data: { user, token } };
  }
}

export default UserService;
