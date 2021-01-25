import express from 'express';
import routes from './routes';
import serverConfig from './config/server.json';

const app = express();
const port = process.env.PORT || serverConfig.port;

routes(app);

app.listen(port, function () {
  console.log('Server started on port: ' + port);
});
