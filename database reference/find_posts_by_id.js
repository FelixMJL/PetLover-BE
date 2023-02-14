// get author_id (req.id) --edit page
// find Elon Musk's posts
// Order by timestamp (new to old)
db.posts.find({author: ObjectId("63e8768a21bfd46ae27cbda3")}).sort({create_at: -1})

// find posts with user detail
db.posts.aggregate(
    [
        {
            $match: {author: ObjectId("63e8768a21bfd46ae27cbda3")}
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
).sort({create_at: -1})