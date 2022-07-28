const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).json({msg:'there is an error'});
};

export default errorHandlerMiddleware;