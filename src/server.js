import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/status', (req, res) => {
  res
    .status(200)
    .send({ status: 200, message: 'The server is up and running!' });
});
app.listen(process.env.PORT);
