import { Request, Response } from "express"
import { compareService } from "src/services/compare.services"

export async function compareController(req: Request, res: Response) {
  const query = req.query.q

  if (typeof query !== "string" || !query.trim()) {
    return res.status(400).json({
      code: "INVALID_QUERY",
      message: "Search query is required",
    })
  }

  try {
    const result = await compareService(query)

    return res.status(200).json(result)
  } catch (err) {
    console.error("Compare failed:", err)

    return res.status(500).json({
      code: "COMPARE_FAILED",
      message: "Unable to fetch comparison data at this time",
    })
  }
}
