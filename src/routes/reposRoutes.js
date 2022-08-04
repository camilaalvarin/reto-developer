import { Router } from 'express'
import { getRepos, getRepo, postRepo, updateRepo, deleteRepo } from '../controllers/reposController.js'

const router = Router()

router.get('/repositories', getRepos)
router.get('/repositories/:id', getRepo)
router.post('/repositories', postRepo)
router.put('/repositories/:id', updateRepo)
router.delete('/repositories/:id', deleteRepo)

export default router;