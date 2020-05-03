import express from 'express';

const app = express();

app.get('/crawl', (req,res) => res.send('hello')); 