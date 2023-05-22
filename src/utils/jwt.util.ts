import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = (object: Object, options?: jwt.SignOptions | undefined) => {
    return jwt.sign(object, config.jwtSecret, options);
    }

export const decodeToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
    
        return { valid: true, expired: false, decoded };
      } catch (error:any) {
        return {
          valid: false,
          expired: error.message === "jwt expired",
          decoded: null,
        };
      }
    }

