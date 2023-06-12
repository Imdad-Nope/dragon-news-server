const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())



const categories = require('./data/data.json')
const news = require('./data/news.json')


//Categories Leftside Routes ----
app.get('/news-paper', (req, res) => {
  res.send(categories)
})

// All news ----
app.get('/news', (req, res)=>{
  res.send(news)
})

//All categories news ----

app.get('/catergories/:id', (req, res)=>{
  const id = req.params.id;
  if(id === '08'){
    res.send(news)
  }
  else{
    const newsCategories = news.filter( n => n.category_id === id);
    res.send(newsCategories)
  }
})
// All news by declared Id ---
app.get('/news/:id', (req,res)=>{
  const id = req.params.id;
  const selectedNews = news.find( n => n._id === id);
  res.send(selectedNews)
})

app.listen(port,()=>{
    console.log('dragon server is listening on Port', port);
})