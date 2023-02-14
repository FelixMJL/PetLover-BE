// Show one user's  personal page
// show all users' details with all their posts

db.users.aggregate(
    {
        $match: {_id:ObjectId("63e8768a21bfd46ae27cbda3")}
    },

    {
        $lookup: {
            from: "posts",
                localField: "posts",
                foreignField: "_id",
                as: "all_posts"
        }
    },

)


// {
//     $unwind: "$posts",
// },
