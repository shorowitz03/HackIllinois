const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`)); // listen on proxy
