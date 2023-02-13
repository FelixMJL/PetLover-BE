// click and get one single post

// get post_id(req.id)
// find post without user detail
db.posts.find({_id:ObjectId("63e8786021bfd46ae27cbda7")})

// find post with user detail
db.posts.aggregate(
    [
        {
            $match: {_id:ObjectId("63e8786021bfd46ae27cbda7")}
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
)