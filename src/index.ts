import express from 'express';
import { crawl } from './crawl';

const app = express();
app.get('/crawl', (req,res) =>{
  crawl().then(result => res.send(result));
}); 
app.listen(3000, () => {
  console.log('server started!');
});

