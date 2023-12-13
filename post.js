const io = require('socket.io-client');


// Add a comment to a post
function addComment(postId, comment, callback) {
    db.query('INSERT INTO comments (post_id, text) VALUES (?, ?)', [postId, comment], (err, results) => {
        if (err) {
            console.error(err);
            return callback(err);
        }

        db.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
            if (err) {
                console.error(err);
                return callback(err);
            }

            const updatedPost = results[0];
            callback(null, updatedPost);
        });
    });
}

// Handle post likes
function likePost(postId, callback) {
    db.query('UPDATE posts SET likes = likes + 1 WHERE id = ?', [postId], (err, results) => {
        if (err) {
            console.error(err);
            return callback(err);
        }

        db.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
            if (err) {
                console.error(err);
                return callback(err);
            }

            const updatedPost = results[0];
            callback(null, updatedPost);
        });
    });
}

// Handle post shares
function sharePost(postId, callback) {
    db.query('UPDATE posts SET shares = shares + 1 WHERE id = ?', [postId], (err, results) => {
        if (err) {
            console.error(err);
            return callback(err);
        }

        db.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
            if (err) {
                console.error(err);
                return callback(err);
            }

            const updatedPost = results[0];
            callback(null, updatedPost);
        });
    });
}

// Update post time
function updatePostTime(postId, timestamp) {
    const postTimeElement = document.getElementById(`postTime${postId}`);
    const currentTime = new Date();
    const postDate = new Date(timestamp);
    const timeDifference = currentTime - postDate;

    if (timeDifference < 60000) {
        postTimeElement.textContent = `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
        postTimeElement.textContent = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
        postTimeElement.textContent = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else if (timeDifference < 604800000) {
        postTimeElement.textContent = `${Math.floor(timeDifference / 86400000)} days ago`;
    } else {
        // Show the date if the post is more than a week old
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        postTimeElement.textContent = postDate.toLocaleDateString(undefined, options);
    }
    // Call updateTime initially
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
}

module.exports = {
    addComment,
    likePost,
    sharePost,
    updatePostTime,
};
