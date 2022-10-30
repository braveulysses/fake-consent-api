import jsonServer from 'json-server';
import morgan from 'morgan';

const port = process.env.PORT || "8080";
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
server.listen(port, () => {
  console.log("Listening to port 3000");
})


