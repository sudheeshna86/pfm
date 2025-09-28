import {Router} from 'express'
import { login, Register} from '../controller/AuthController.js'
const Authrouter=Router()
//https methods(post,put,get,delete)
Authrouter.post('/register',Register)
Authrouter.post('/login',login)
export default Authrouter



