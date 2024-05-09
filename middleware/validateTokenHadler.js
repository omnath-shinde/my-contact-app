const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (request, response, next) => {
    let token;
    let authHeader =
        request.headers.Authorization || request.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
            if (error) {
                response.status(401);
                throw new Error("User is not authorized");
            }
            request.user = decode.user;
            next();
        });

        if (!token) {
            response.status(200);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;
