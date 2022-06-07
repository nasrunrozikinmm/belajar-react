const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class Controller {
    static async postRegister(req, res) {
        const { firstName, lastName, email, password } = req.body;
        try {
            const newUser = {
                firstName,
                lastName,
                email,
                password,
                role: "costumer",
                phoneNumber: "edit your phone number",
                address: "edit your address",
                money: "top-up your money",
            };

            const createNewUser = await User.create(newUser);

            res.status(201).json({
                id: createNewUser.id,
                email: createNewUser.email,
            });
        } catch ({ errors }) {
            console.log(errors);
            res.status(403).json(errors[0].message);
        }
    }

    static async postLogin(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) throw { status: 401, message: "wrong email/password" };
            else {
                if (comparePassword(password, user.password)) {
                    const access_token = signToken({ email });
                    if (!access_token) throw { status: 401, message: "wrong email/password" };
                    res.status(200).json({
                        access_token,
                        id: user.id,
                        email: user.email,
                        role: user.role,
                    });
                }
            }
        } catch (error) {
            console.log(error);
            res.status(error.status).json(error.message);
        }
    }
}

module.exports = Controller;