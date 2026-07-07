import express from "express";

const app = express();
const PORT = 8000;
app.get("/", async (req, res) => {
  res.send("Backend: up and running mate.");
});

app.listen(PORT, () => {
  console.log("Backend listening on port:", PORT);
});
