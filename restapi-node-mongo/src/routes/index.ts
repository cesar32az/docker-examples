import { Router } from "express";
import tasks from './tasks.routes'

const router: Router = Router();

router.use('/tasks', tasks)

export default router;
