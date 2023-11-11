const signUp = async (req,res) => {
    console.log(req.body);
    res.status(200).send("Welcome to registration page ! --> POST");
}
const signIn = async (req,res) => {
    res.status(200).send("Welcome to login page ! --> POST");
}

module.exports = { signUp , signIn };
