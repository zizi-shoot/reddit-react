import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import indexTemplate from './indexTemplate';
import { App } from '../App';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reddit-react-clone.herokuapp.com/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: process.env.SECRET },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    },
  )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data.access_token),
      );
    })
    .catch(console.log);
});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on https://reddit-react-clone.herokuapp.com:${PORT}`);
});
