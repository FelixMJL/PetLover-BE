//get user_id，content and photo or video(optional)
// Elon Musk
db.posts.insertOne({
    author: ObjectId("63e8768a21bfd46ae27cbda3"),
    content: 'Starship Super Heavy',
    photo: 'https://twitter.com/elonmusk/status/1624626672464195584/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
// mongoose(findOneAndUpdate()): filter and update
// get current post_id by content
db.posts.find({content: 'Starship Super Heavy'})
// and then user_id to update posts array
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {posts: ObjectId("63e8777221bfd46ae27cbda4")}})


db.post.insertOne({
    author: ObjectId("63e8768a21bfd46ae27cbda3"),
    content: 'Some of the smartest people I know actively believe the press … amazing\n',
    photo: '',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {posts: ObjectId("63e877ce21bfd46ae27cbda5")}})


db.posts.insertOne({
    author: ObjectId("63e8768a21bfd46ae27cbda3"),
    content: 'This test is at ~50% throttle. Launch attempt next month will be at ~90%.',
    photo: '',
    video: 'https://twitter.com/i/status/1623812763415093249',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {posts: ObjectId("63e8777221bfd46ae27cbda6")}})


db.posts.insertOne({
    author: ObjectId("63e8768a21bfd46ae27cbda3"),
    content: 'And making a day in the life videos\n',
    photo: 'https://twitter.com/elonmusk/status/1624093894031056898/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {posts: ObjectId("63e8777221bfd46ae27cbda7")}})


db.posts.insertOne({
    author: ObjectId("63e8768a21bfd46ae27cbda3"),
    content: 'Attempting Starship 33 engine static fire',
    photo: 'https://twitter.com/NASASpaceflight/status/1623784546800922629/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {posts: ObjectId("63e8777221bfd46ae27cbda8")}})


// Bill Gates
db.posts.insertOne({
    author: ObjectId("63e8a0f06c62483b63fc4c50"),
    content: 'Thank you, \n' +
        '@libbycave\n' +
        ' and the BBC team. I really enjoyed my conversation with Amol in Kenya and am honored to be in the company of such fascinating people.',
    photo: 'https://twitter.com/libbycave/status/1621505168742449152/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a0f06c62483b63fc4c50")}, {$addToSet: {posts: ObjectId("63e8a1ff6c62483b63fc4c51")}})

db.posts.insertOne({
    author: ObjectId("63e8a0f06c62483b63fc4c50"),
    content: 'Super inspiring.',
    photo: 'https://t.co/XZtiHMr8kC',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a0f06c62483b63fc4c50")}, {$addToSet: {posts: ObjectId("63e8a1ff6c62483b63fc4c52")}})

db.posts.insertOne({
    author: ObjectId("63e8a0f06c62483b63fc4c50"),
    content: 'CRISPR has revolutionized health over the past decade. I’m excited to see how it will continue to evolve and intersect with other technologies in the decade to come.',
    photo: 'https://t.co/q2m1ETeH7C',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a0f06c62483b63fc4c50")}, {$addToSet: {posts: ObjectId("63e8a1ff6c62483b63fc4c53")}})

// Donald J. Trump
db.posts.insertOne({
    author: ObjectId("63e8a6c46c62483b63fc4c54"),
    content: 'To all of those who have asked, I will not be going to the Inauguration on January 20th.',
    photo: '',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a6c46c62483b63fc4c54")}, {$addToSet: {posts: ObjectId("63e8aa766c62483b63fc4c55")}})

db.posts.insertOne({
    author: ObjectId("63e8a6c46c62483b63fc4c54"),
    content: 'The 75,000,000 great American Patriots who voted for me, AMERICA FIRST, and MAKE AMERICA GREAT AGAIN, will have a GIANT VOICE long into the future. They will not be disrespected or treated unfairly in any way, shape or form!!!',
    photo: '',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a6c46c62483b63fc4c54")}, {$addToSet: {posts: ObjectId("63e8aa766c62483b63fc4c56")}})

db.posts.insertOne({
    author: ObjectId("63e8a6c46c62483b63fc4c54"),
    content: '',
    photo: '',
    video: 'https://twitter.com/i/status/1347334804052844550',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a6c46c62483b63fc4c54")}, {$addToSet: {posts: ObjectId("63e8aa766c62483b63fc4c57")}})

db.posts.insertOne({
    author: ObjectId("63e8a6c46c62483b63fc4c54"),
    content: 'These scoundrels are only toying with the \n' +
        '@sendavidperdue\n' +
        ' (a great guy) vote. Just didn’t want to announce quite yet. They’ve got as many ballots as are necessary. Rigged Election!',
    photo: '',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8a6c46c62483b63fc4c54")}, {$addToSet: {posts: ObjectId("63e8aa766c62483b63fc4c58")}})

// MrBeast
db.posts.insertOne({
    author: ObjectId("63e8ad946c62483b63fc4c59"),
    content: 'Over a million people celebrated 100,000,000 subscribers with me 🥹\n' +
        '\n' +
        'YouTube is the one thing that’s always made me happy and I’m grateful I get to do this all day everyday :)',
    photo: '',
    video: 'https://twitter.com/MrBeast/status/1552735248026411010/photo/1',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}, {$addToSet: {posts: ObjectId("63e8adfc6c62483b63fc4c5a")}})


// Chris Tyson
db.posts.insertOne({
    author: ObjectId("63e8aec46c62483b63fc4c5b"),
    content: 'We survived 2022 🫡',
    photo: '',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8aec46c62483b63fc4c5b")}, {$addToSet: {posts: ObjectId("63e8af0e6c62483b63fc4c5c")}})

db.posts.insertOne({
    author: ObjectId("63e8aec46c62483b63fc4c5b"),
    content: 'I’m kind of sad \n' +
        '@Hot_Wheels\n' +
        ' doesn’t make this in adult sizes 😒',
    photo: 'https://twitter.com/chris/status/1607113828562776064/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8aec46c62483b63fc4c5b")}, {$addToSet: {posts: ObjectId("63e8c5a16c62483b63fc4c5d")}})

db.posts.insertOne({
    author: ObjectId("63e8aec46c62483b63fc4c5b"),
    content: 'Some can’t handle the truth',
    photo: 'https://twitter.com/chris/status/1606467571783553026/photo/1',
    video: '',
    create_at: new Date(),
    comments: []
})
db.users.updateOne({_id: ObjectId("63e8aec46c62483b63fc4c5b")}, {$addToSet: {posts: ObjectId("63e8c6106c62483b63fc4c5e")}})