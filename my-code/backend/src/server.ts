import express from "express";
import qs from "qs";
const app = express();

app.get("/", (req, res) => {
  const query = qs.stringify(req.query);

  return res.json({ message: qs.stringify(query) });
});

app.listen(3333, () => {
  console.log("Server is listening on port 3333");
});
