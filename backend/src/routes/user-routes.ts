import { Router } from 'express';
import { getAllUser, userLogin, userSignup } from '../controllers/user-controllers.js';
import { loginValidator, signupValidator, validate } from '../utils/validators.js'

const userRoutes = Router();

userRoutes.get("/",getAllUser)
userRoutes.post("/signup",validate(signupValidator),userSignup);
userRoutes.post("/login",validate(loginValidator),userLogin);

export default userRoutes;