//GET all posts
exports.getAllPosts = (req, res) => {
    res.json([
        {content: 'react', author: '3231jji1h24j'},
        {content: 'hello world', author: 'fajita2h24j'}
    ])
}