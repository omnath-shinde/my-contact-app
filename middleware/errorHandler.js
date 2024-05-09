const { constants } = require("../constants.js");

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            response.json({
                title: "Validation Failed",
                message: error.message,
                stackTrace: error.stack,
            });
            break;
        case constants.NOT_FOUND:
            response.json({
                title: "Not Found",
                message: error.message,
                stackTrace: error.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            response.json({
                title: "Un-authorized",
                message: error.message,
                stackTrace: error.stack,
            });
            break;
        case constants.FORBIDDEN:
            response.json({
                title: "Forbiddern",
                message: error.message,
                stackTrace: error.stack,
            });
            break;
        case constants.SERVER_ERROR:
            response.json({
                title: "Server error",
                message: error.message,
                stackTrace: error.stack,
            });
            break;
        default:
            console.log("No Error, All good !");
            break;
    }
};

module.exports = errorHandler;
