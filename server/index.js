const express = require("express");
const { Dialogflow_V2 } = require("dialogflow");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/dialogflow", async (req, res) => {
  const client = new Dialogflow_V2.DialogflowClient({
    accessToken: "YOUR_ACCESS_TOKEN"
  });

  const queryInput = {
    text: {
      text: req.body.message,
      languageCode: "en-US"
    }
  };

  const [response] = await client.textRequest({
    session: "YOUR_SESSION_ID",
    queryInput
  });

  res.send({ response: response.fulfillmentText });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});