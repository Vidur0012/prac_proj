exports.errorHandler = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;
    const data = error.data;
    if (status == 500) {
        res.status(status).json({ message: "Something went wrong!" });
        console.log(error)
    } else {
        res.status(status).json({ message: message, data: data });
    }
};