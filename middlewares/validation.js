const validatePagination = (req, res, next) => {
    if (req.query.skip != undefined && (req.query.skip < 0 || isNaN(req.query.skip)) ){
        throw new Error('offset must be a positive number')
    }
    if (req.query.limit != undefined && (req.query.limit < 0 || isNaN(req.query.limit)) ){
        throw new Error('limit must be a positive number')
    }
    next();

}

module.exports = {
    validatePagination,
}