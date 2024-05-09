const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (request, response) => {
    const { username, email, password } = request.body;
    if (!username || !email || !password) {
        response.status(400);
        throw new Error("All fields are mandotory");
    }

    const userAvailabe = await User.findOne({ email });

    if (userAvailabe) {
        response.status(400);
        throw new Error("User already registered!");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User created: ${user}`);
    if (user) {
        response.status(200).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        response.status(400);
        throw new Error("User data is not valid");
    }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        response.status(400);
        throw new Error("All fields are mandatory!");
    }

    const user = await User.findOne({ email });

    // compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "15m",
            }
        );
        response.status(200).json({ accessToken });
    } else {
        response.status(401);
        throw new Error("Email or password is not valid!");
    }
});

//@desc Curren user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (request, response) => {
    response.json(request.user);
});

module.exports = { registerUser, loginUser, currentUser };
