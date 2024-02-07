import { Router } from 'express';
import { getAllUser, userLogin, userLogout, userSignup, verifyUser } from '../controllers/user-controllers.js';
import { loginValidator, signupValidator, validate } from '../utils/validators.js'
import { verifyToken } from '../utils/token-manager.js';

const userRoutes = Router();

userRoutes.get("/",getAllUser)
userRoutes.post("/signup",validate(signupValidator),userSignup);
userRoutes.post("/login",validate(loginValidator),userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;