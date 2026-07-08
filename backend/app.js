import express from "express";

const app = express();

app.use(express.json());

let last_saved_idx = 0;

// log incoming request and timestamps
app.use((req, res, next) => {
  const now = new Date();

  console.log(`${now}: Incoming ${req.method} request from ${req?.ip}`);
  next();
});

const PORT = 8000;
app.get("/", async (req, res) => {
  res.setHeader("X-Powered-By", "Awet nginx");
  res.json({ message: "Backend: up and running mate." });
});

// receive data from frontend
app.post("/data", async (req, res) => {
  const data = await req.body;
  last_saved_idx++;
  console.log("received this data :", data);
  res.json({ message: "Data saved successfully.", id: last_saved_idx });
});

app.listen(PORT, () => {
  console.log("Backend listening on port:", PORT);
});
