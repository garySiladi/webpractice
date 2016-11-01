const router = require('express').Router();
const blogs = require('../blogs/blogs.json');

router.get('/page/:pageNumber', function(req, res) {
  const n = req.params.pageNumber;
  let slicedObject = blogs.sort(sortByDate);
  slicedObject = slicedObject.slice((n-1)*5,n*5);
  if ((blogs.sort(sortByDate))[n*5])
  slicedObject.push(true);
  else slicedObject.push(false);
  res.send(slicedObject);
});

router.get('/blog/:blogId', function(req, res) {
  const blog = getBlogById(req.params.blogId,blogs);
  res.send(blog);
});

function sortByDate(b, a){
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function getBlogById(id,data){
  let answer = null
  data.map(function (blog) {
            if (blog.id == id) {
              answer = blog;
            }
          });
  return answer;
}

module.exports = router;
