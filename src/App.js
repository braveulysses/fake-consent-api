import jsonServer from 'json-server';
import morgan from 'morgan';
import User from './models/User';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  'static': 'public',
  'readOnly': true
});

server.set('view engine', 'pug');
server.use(morgan('dev'));

const _sendDefaultResponse = (response) => {
  response.format({
    html: () => {
      response.status(200).render('html/about');
    }
  });
};

server.use(middlewares);
server.get('/', (request, response) => {
  response.format({
    html: () => {
      response.status(200).render('html/about');
    }
  });
})
server.use('/api', router);
server.listen(3000, () => {
  console.log("Listening to port 3000");
})


