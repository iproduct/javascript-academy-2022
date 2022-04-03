module.exports.sendErrorResponse = (req, res, status, message, error) => {
    if(req.app.get('env') === 'production') {
        error = undefined;
    }
    res.status(status).json({
        status,
        message,
        error
    })
}

module.exports.replace_id = entity => {
    entity.id = entity._id;
    delete entity._id;
    return entity;
}