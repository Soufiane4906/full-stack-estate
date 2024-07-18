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

// stripe conf
// import { handleCheckoutSession } from './controllers/stripe.controller.js';
// import { stripeSecretKey } from './lib/config.js';

// const stripe = stripe(stripeSecretKey);
// stripe conf
const app = express();
app.use(cors({ origin: 'http://localhost:5175', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use("/api/data", dataRoute); // Nouvelle ligne
app.use("/api/guides", guideRoute); // Nouvelle ligne

// app.post('/stripe-webhook', express.raw({type: 'application/json'}), (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, 'your-webhook-secret-here');
//   } catch (err) {
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }
//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;
//     // Handle the checkout.session.completed event
//     handleCheckoutSession(session);
//   }
//   // Return a response to acknowledge receipt of the event
//   res.json({received: true});
// });
app.listen(8800, () => {
  console.log("Server is running!");
});
