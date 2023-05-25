import { Router } from "express";
import {Registration,Login,Logout,Activate,Refresh,User} from '../controllers/Controllers.js'


const router = new Router();


router.post('/registration', Registration)
router.post('/login', Login)
router.post('/logout', Logout)
router.get('/activate/:id', Activate)
router.get('/refresh', Refresh)
router.get('/user', User)



export default router;