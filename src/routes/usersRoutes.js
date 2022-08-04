import { Router } from 'express'
import { getUsers, getUser, postUser, updateUser, deleteUser, getUserRepos, getUserLoginHistory } from '../controllers/usersController.js'  //getUser, postUser, updateUser, deleteUser,

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.post('/users', postUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id/repos', getUserRepos)
router.get('/users/:id/login', getUserLoginHistory)

export default router;