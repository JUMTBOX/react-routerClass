const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const { PORT, Client_URL, MONGO_DB_URI } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: Client_URL,
    credentials: true,
  }),
);

const mongoDataRouter = require('./routes/data');

app.use('/data', mongoDataRouter);

app.use('/', (req, res) => {
  res.json({ text: '서버 열림..' });
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS OPEN ON PORT${PORT}...`);
});
