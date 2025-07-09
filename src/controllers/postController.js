const postService = require("../services/postService");

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.getPostById(id);
    res.json(post);
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
