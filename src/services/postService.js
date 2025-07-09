const { public_api } = require("../config/config");
const postRepository = require("../repositories/postRepository");

class PostService {
  async getPostById(id) {
    let post = await postRepository.getPostById(id);
    if (post) {
      return post;
    }

    // If not found, fetch from public API
    const response = await fetch(`${public_api}/posts/${id}`);
    if (!response.ok) {
      throw new ApiError(404, `Post with id ${id} not found`);
    }
    post = await response.json();
    await postRepository.savePost(post);
    return post;
  }

  async getAllPosts() {
    let posts = await postRepository.getAllPosts();
    if (posts.length > 0) {
      return posts;
    }

    // If no posts, fetch first 10 posts from public API as example
    const response = await fetch(`${public_api}/posts?_limit=10`);
    if (!response.ok) {
      throw new ApiError(500, `Failed to fetch posts`);
    }
    posts = await response.json();

    for (const post of posts) {
      await postRepository.savePost(post);
    }

    return posts;
  }
}

module.exports = new PostService();
