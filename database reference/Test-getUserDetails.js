const post = {
    _id: "63e8af0e6c62483b63fc4c5c",
        author: "63e8aec46c62483b63fc4c5b",
    content: 'We survived 2022 🫡',
    photo: '',
    video: '',
    create_at: "2023-02-12T09:19:10.538Z",
    comments: [],
    user_info: [
    {
        _id: "63e8aec46c62483b63fc4c5b",
        username: 'chris',
        nickname: 'Chris Tyson',
        email: 'chris@twitter.com',
        password: '5d7f15f2fce8ddb2dbef5c38be896c238ba7e0a432e396759030a853fa6b1151',
        join_date: "2023-02-12T09:17:56.497Z",
        location: '',
        following: [ "63e8ad946c62483b63fc4c59"],
        followers: [ "63e8ad946c62483b63fc4c59" ],
        avatar: 'https://twitter.com/chris/photo',
        introduction: 'I’m in Mrbeast’s videos sometimes.',
        website_url: '',
        posts: [ "63e8af0e6c62483b63fc4c5c"]
    }
]
}

const {content, photo, video} = post
console.log(content, photo, video);

const {user_info} = post
const user = user_info[0]
const {avatar, username, nickname} = user
console.log(avatar, username, nickname)