const { parseAsync } = require("../validators/authValidator")

const validate = (schema) => async (req, res, next) => {
    try {
        // We have a method schema.parseAsync which parse the req,body
        const parseBody = await parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // console.log(err.errors[0].message);
        // res.status(400).json({ message : err.errors[0].message });
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        }
        next(error);
    }
}

module.exports = validate;