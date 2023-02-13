// Following page
// show all following users' posts
// get current_user (_id)

// find MrBeast following's posts without users' details
db.posts.find({
    "author": {
        "$in": db.users.findOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}).following
    }
}).sort({create_at: -1})

// find MrBeast following's posts with users' details
db.posts.aggregate(
    [
        {
            $match: {
                "author": {
                    "$in": db.users.findOne({_id: ObjectId("63e8ad946c62483b63fc4c59")}).following
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "user_info"
            }
        }
    ]
).sort({create_at:-1})