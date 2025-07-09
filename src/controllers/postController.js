const postService = require("../services/postService");

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.getPostById(id);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
