import express from 'express';
import routes from './routes';
import serverConfig from './config/server.json';
import projectDependencies from './config/projectDependencies';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || serverConfig.port;

projectDependencies.databaseService.initDatabase().then(() => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  routes(app, projectDependencies);

  app.listen(port, function () {
    console.log('Server started on port: ' + port);
  });
});
