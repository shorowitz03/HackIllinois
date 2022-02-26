const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.send({ test: "hi" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`)); // listen on proxy
