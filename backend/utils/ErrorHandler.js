class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);

        Error.captureStackTrace(this);
        this.statusCode=this.statusCode;
    }
}

module.exports=ErrorHandler;