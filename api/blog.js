const router = require('express').Router();
const path = require('path');
const blogs = require('./blogs.json');
const fs = require('fs');
const assets = path.join(__dirname, '../assets');

router.get('/page/:pageNumber', function(req, res) {
  const n = req.params.pageNumber;
  let articles = fs.readdirSync(assets);
  articles.reverse();
  articles = articles.slice((n-1)*5,n*5+1);
  articles = fillData(articles);
  res.send(articles);
});

router.get('/blog/:blogId', function(req, res) {
  const blog = getBlogById(req.params.blogId);
  res.send(blog);
});

function fillData(files){
  let collection = [];
  files.forEach( function(file,index) {
    if (index != 5) {
      let articleData = fs.readFileSync(path.join(assets,file));
      articleData = JSON.parse(articleData);
      articleData["date"] = file.slice(0, -5);
      collection.push(articleData);
    }
  });
  if (files[5]) collection.push(true);
  else collection.push(false);
  return collection;
}

function getBlogById(id){
  let articles = fs.readdirSync(assets);
  let answer = null;
  articles.forEach( function(file,index) {
    if (index != 5) {
      let articleData = fs.readFileSync(path.join(assets,file));
      articleData = JSON.parse(articleData);
      articleData["date"] = file.slice(0, -5);
      if (articleData.id == id) answer = articleData;
    }
  });
  return answer;
}

module.exports = router;
