
/**
 * Class represent success message.
 * @param data
 * @param message
 * @constructor
 */
function SuccessResponse(data, message) {
    this.message = message || 'Success';
    this.status = 200;
    this.data = data;
}


/**
 * Class represent error message.
 * @param message
 * @param internalError
 * @constructor
 */
function ErrorResponse(message, internalError) {
    this.message = message || 'Unknown error.';
    this.status = 503;
    this.data = '';
    this.internalError = internalError || null;
}

module.exports = {
    SuccessResponse: SuccessResponse,
    ErrorResponse: ErrorResponse
};