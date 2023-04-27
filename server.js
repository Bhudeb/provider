// import required essentials
import { createServer } from 'http';
import express, { json } from 'express';
import cors from 'cors';
// import `items` from `routes` folder 
import itemsRouter from './routes/items.js'

// create new app
const app = express();
app.use(json());
// use it before all route definitions
// allowing below URL to access these APIs end-points
// you can replace this URL(http://localhost:8100) with your
// application URL from where you are calling these APIs
app.use(cors({origin: 'http://localhost:8100'}));

/* this '/items' URL will have two end-points:
→ localhost:3000/items/ (this returns array of objects)
→ localhost:3000/items/:id (this returns single object)
*/
app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

const server = createServer(app);
const port = 8000;
server.listen(port);
console.debug('Server listening on port ' + port);