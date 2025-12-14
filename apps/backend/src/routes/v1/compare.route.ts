import { Router } from "express"
import { compareController } from "src/controllers/compare.controllers"

const router = Router()

router.get("/", compareController)

export default router
