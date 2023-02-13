// get user_id(_id) and target_user_id(req.id)

// Chris Tyson follows MrBeast
// update my following
db.users.updateOne({_id: ObjectId("63e8aec46c62483b63fc4c5b")}, {$addToSet: {following: ObjectId("63e8ad946c62483b63fc4c59")}})
// update target's followers
db.users.updateOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}, {$addToSet: {followers: ObjectId("63e8aec46c62483b63fc4c5b")}})


// MrBeast follows Chris
db.users.updateOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}, {$addToSet: {following: ObjectId("63e8aec46c62483b63fc4c5b")}})
db.users.updateOne({_id: ObjectId("63e8aec46c62483b63fc4c5b")}, {$addToSet: {followers: ObjectId("63e8ad946c62483b63fc4c59")}})

// MrBeast follows Elon Musk
db.users.updateOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}, {$addToSet: {following: ObjectId("63e8768a21bfd46ae27cbda3")}})
db.users.updateOne({_id: ObjectId("63e8768a21bfd46ae27cbda3")}, {$addToSet: {followers: ObjectId("63e8ad946c62483b63fc4c59")}})

