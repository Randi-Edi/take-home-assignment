const db = require("../database/db.js");

class PostRepository {
  getPostById(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM posts WHERE id = ?`, [id], (err, row) => {
        if (err) {
          reject(new Error("Database error: " + err.message));
        } else {
          resolve(row);
        }
      });
    });
  }

  getAllPosts() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM posts`, [], (err, rows) => {
        if (err) {
          reject(new Error("Database error: " + err.message));
        } else {
          resolve(rows);
        }
      });
    });
  }

  savePost(post) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO posts (id, userId, title, body) VALUES (?, ?, ?, ?)`,
        [post.id, post.userId, post.title, post.body],
        function (err) {
          if (err) {
            reject(new Error("Database error: " + err.message));
          } else {
            resolve(post);
          }
        }
      );
    });
  }
}

module.exports = new PostRepository();
