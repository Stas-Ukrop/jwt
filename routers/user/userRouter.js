import express from 'express'
import controllers from '../../controllers/user.js'

const router = express.Router()


router.post('/register',controllers.register)
router.post('/login',controllers.login)
router.post('/logout',controllers.logout)
export default router