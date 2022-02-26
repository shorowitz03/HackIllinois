const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const app = express();

app.use(cors({ credentials: true }))
app.use(cookieParser());
app.use("/api/auth", authRouter);

app.get("/api", (req, res) => {
  console.log("cookies: " + JSON.stringify(req.cookies));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`)); // listen on proxy
