import express from "express"
import compareRoutes from "./routes/v1/compare.route"

export function createApp() {
  const app = express()

  app.use(express.json())

  app.use("/v1/compare", compareRoutes)

  return app
}
