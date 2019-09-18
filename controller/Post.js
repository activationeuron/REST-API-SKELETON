const Post = require("../models/Post");

exports.getPost = (req, res) => {
  res.send({ message: "Message from Controller Js" });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(200).json({ post: result });
  });

  console.log("POST CREATE", req.body);
};
