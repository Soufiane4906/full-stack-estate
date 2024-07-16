import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import dataRoute from "./routes/data.route.js"; // Nouvelle ligne
import guideRoute from "./routes/guide.route.js"; // Nouvelle ligne


const app = express();

app.use(cors({ origin: 'http://localhost:5175', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
//app.use("/api/chats", chatRoute);
//app.use("/api/messages", messageRoute);
app.use("/api/data", dataRoute);
app.use("/api/guides", guideRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
