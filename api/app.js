import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import dataRoute from "./routes/data.route.js";
import guideRoute from "./routes/guide.route.js";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51OtdAyGmXNQGydzPTs5rVO4CAffYn2xQ1pnKZc0T6TPf9347q0gIRRegBCELdxUkuWJJoLSErmBbzuURR6O1wZmz004FEUJ3It');

const app = express();
app.use(cors({ origin: 'http://localhost:5175', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use("/api/data", dataRoute);
app.use("/api/guides", guideRoute);

app.post("/payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
});

app.listen(8800, () => {
  console.log("Server is running!");
});
