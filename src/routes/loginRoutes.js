import { Router } from 'express'
import { getLog, getLogins, postLogin, updateLogin, deleteLogin } from '../controllers/loginController.js'

const router = Router()

router.get('/login', getLogins)
router.get('/login/:id', getLog)
router.post('/login', postLogin)
router.put('/login/:id', updateLogin)
router.delete('/login/:id', deleteLogin)

export default router;