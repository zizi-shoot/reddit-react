import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';
import indexTemplate from './indexTemplate';
import { App } from '../App';

const PORT = process.env.PORT || 3000;
const SERVER = process.env.SERVER !== 'undefined' ? process.env.SERVER : 'http://localhost';
const REDIRECT_URI = SERVER === 'http://localhost' ? `${SERVER}:${PORT}` : SERVER;
const IS_DEV = process.env.NODE_ENV !== 'production';
const app = express();

if (IS_DEV) {
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
}

app.use('/static', express.static('./dist/client'));
app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${REDIRECT_URI}/auth`,
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
  console.log(`Server started on ${SERVER}:${PORT}`);
});
