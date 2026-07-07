import express from "express";

const app = express();

// log incoming request and timestamps
app.use((req, res, next) => {
  const now = new Date();

  console.log(`${now}: Incoming ${req.method} request from ${req?.ip}`);
  next();
});

const PORT = 8000;
app.get("/", async (req, res) => {
  res.send("Backend: up and running mate.");
});

app.listen(PORT, () => {
  console.log("Backend listening on port:", PORT);
});
