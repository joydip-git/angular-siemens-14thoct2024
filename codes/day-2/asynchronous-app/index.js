const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.slice(0, 5));
    } catch (error) {
        console.log(error);
    }
}
fetchPosts()