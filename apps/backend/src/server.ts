import express from "express";
import { SiteName } from "@shared";

console.log("Using shared enum:", SiteName.AMAZON);

const app = express();

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
