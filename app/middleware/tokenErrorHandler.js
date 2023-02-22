module.exports = (err, req, res, next) => {
    if(err.message === "jwt malformed")
    res.status(400).json({error: "no token, please login in first"});
    next(err)
}