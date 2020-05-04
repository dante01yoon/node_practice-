import express from 'express';
import { crawl } from './crawl';
import { extract } from './extract';

const app = express();
app.get('/crawl', async(req, res) => {
  const result = await crawl();
  res.send(extract(result).join(', ')); 
}) 
app.listen(3000, () => {
  console.log('server started!');
});

