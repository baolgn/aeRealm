const io = require('socket.io-client');
const socket = io();

socket.on('postUpdated', (post) => {
    // Update the like and share counts on the frontend
    document.getElementById(`likesCount${post.id}`).textContent = `${post.likes} Likes`;
    document.getElementById(`sharesCount${post.id}`).textContent = `${post.shares} Shares`;
    updatePostTime(post.id, post.timestamp); // Update the post time
});

// Function to handle post interactions
function interactPost(postId, interactionType) {
    fetch(`/api/posts/${postId}/${interactionType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// Function to show comments for a post
function showComments(postId) {
    fetch(`/api/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            const commentsSection = document.getElementById(`commentsSection${postId}`);
            commentsSection.innerHTML = '<strong>Comments:</strong>';

            if (data.comments.length === 0) {
                commentsSection.innerHTML += '<p>No comments yet.</p>';
            } else {
                data.comments.forEach(comment => {
                    commentsSection.innerHTML += `<p>${comment.text}</p>`;
                });
            }
        })
        .catch(error => console.error('Error:', error));
}
