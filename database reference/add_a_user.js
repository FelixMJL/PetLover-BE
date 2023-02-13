// Elon Musk
// ObjectId("63e8768a21bfd46ae27cbda3")
db.users.insertOne({
    username: 'elonmusk',
    nickname: 'Elon Musk',
    email: 'elonmusk@gmail.com',
    password: '58cc83f5b80cb53ce5385af956458fa9eaed89825aff76a8249103c10dee867e',
    join_date: new Date(),
    location: 'New York',
    following: [],
    followers: [],
    avatar: 'https://twitter.com/elonmusk/photo',
    introduction: '',
    website_url: '',
    posts: []
})

// Bill Gates
// ObjectId("63e8a0f06c62483b63fc4c50")
db.users.insertOne({
    username: 'BillGates',
    nickname: 'Bill Gates',
    email: 'BillGates@gmail.com',
    password: '9072661b569b51397d87038dcf46a82b5709c476349ccdeba389726a57aad21f',
    join_date: new Date(),
    location: 'Seattle, WA',
    following: [],
    followers: [],
    avatar: 'https://twitter.com/BillGates/photo',
    introduction: 'Sharing things I\'m learning through my foundation work and other interests.',
    website_url: 'https://www.gatesnotes.com/?WT.mc_id=20200000000000_Blog_BG-TW_&WT.tsrc=BGTW',
    posts: []
})

// Donald J. Trump
// ObjectId("63e8a6c46c62483b63fc4c54")
db.users.insertOne({
    username: 'Donald J. Trump',
    nickname: 'realDonaldTrump',
    email: 'realDonaldTrump@gov.com.cn',
    password: 'bb49f3c529d70fb46310c2767807927ceeeb728201517063679527b955f54d5d',
    join_date: new Date(),
    location: 'Washington, DC',
    following: [],
    followers: [],
    avatar: 'https://twitter.com/realDonaldTrump/photo',
    introduction: '45th President of the United States of America🇺🇸',
    website_url: 'https://t.co/8f9VFxztEJ',
    posts: []
})

// MrBeast
// ObjectId("63e8ad946c62483b63fc4c59")
db.users.insertOne({
    username: 'MrBeast',
    nickname: 'MrBeast',
    email: 'MrBeast@twitter.com',
    password: '6a0622ac8edcf975d801ad58a17d2c9f221ca345699541d1143fba920840cfb9',
    join_date: new Date(),
    location: 'Follow me for a cookie',
    following: [],
    followers: [],
    avatar: 'https://twitter.com/MrBeast/photo',
    introduction: 'Twitter Super Official CEO',
    website_url: 'https://t.co/34hIUViVI7',
    posts: []
})

// Chris Tyson
// ObjectId("63e8aec46c62483b63fc4c5b")
db.users.insertOne({
    username: 'chris',
    nickname: 'Chris Tyson',
    email: 'chris@twitter.com',
    password: '5d7f15f2fce8ddb2dbef5c38be896c238ba7e0a432e396759030a853fa6b1151',
    join_date: new Date(),
    location: '',
    following: [],
    followers: [],
    avatar: 'https://twitter.com/chris/photo',
    introduction: 'I’m in Mrbeast’s videos sometimes.',
    website_url: '',
    posts: []
})
