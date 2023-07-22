class UnauthorizedError extends Error {
    constructor(message = "unauthorized!") {
        super(message);
        this.status = 401;
    }
}

class NotFoundError extends Error {
    constructor(message = "not found!") {
        super(message);
        this.status = 404;
    }
}
class ValidationFailureError extends Error {
    constructor(message = "validation failed!") {
        super(message);
        this.status = 422;
    }
}

module.exports = {
    UnauthorizedError,
    NotFoundError,
    ValidationFailureError
}