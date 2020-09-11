const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// secret key
const stripe = require("stripe")(
  "sk_test_51HPvqdIf8gNOsF75wjplTBJP0KBORKI1nF4885ChvBadRcJ07UiPjZBDBQZKShO75aiRNQsRWgNshXYCH159I8ck004WzS9DlK"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/nick", (request, response) => response.status(200).send("Whats up nick"));

app.post("/payments/create", async (request, response) => {
  // let total_str = request.query.total;
  // const total = total_str.substring(0, total_str.indexOf("."));

  const total = request.query.total;

  console.log(
    "Payment Request Recieved BOOM!!! for this amount >>> ",
    total,
    typeof total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// functions[api]: http function initialized
// click to see response (http://localhost:5001/challenge-7eb5d/us-central1/api).
