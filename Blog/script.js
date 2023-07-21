

const fetchblog = document.getElementById("btns");
fetchblog.addEventListener("click", fetchBlogPosts);


// Function to fetch blog posts from the JSON Placeholder API and display the response body
// Function to fetch blog posts from the JSON Placeholder API and display the values in the HTML elements
function fetchBlogPosts() {
    // The JSON Placeholder API endpoint for blog posts
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch blog posts from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            // Get the elements to display the values
            const userIdElement = document.getElementById('userid');
            const idElement = document.getElementById('id');
            const titleElement = document.getElementById('title');
            const bodyElement = document.getElementById('body');

            // Clear any previous content
            userIdElement.textContent = '';
            idElement.textContent = '';
            titleElement.textContent = '';
            bodyElement.textContent = '';

            // Display the API response values in the respective HTML elements
            const firstPost = posts[0]; // Assuming you want to display the first post
            userIdElement.textContent = firstPost.userId;
            idElement.textContent = firstPost.id;
            titleElement.textContent = firstPost.title;
            bodyElement.textContent = firstPost.body;
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
        });
}

// Add event listener to the button

