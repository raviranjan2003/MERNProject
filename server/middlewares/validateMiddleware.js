const { parseAsync } = require("../validators/authValidator")

const validate = (schema) => async (req, res, next) => {
    try {
        // We have a method schema.parseAsync which parse the req,body
        const parseBody = await parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // console.log(err.errors[0].message);
        res.status(400).json({ message : err.errors[0].message })
    }
}

module.exports = validate;