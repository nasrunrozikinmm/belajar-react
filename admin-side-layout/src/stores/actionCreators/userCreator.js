import axios from "axios";
import { SET_USER_LOGIN } from "../actionTypes/userType";

// const usersUrl = "https://phase3-movie-app.herokuapp.com/users";
const usersUrl = "https://movie-deploy-server.herokuapp.com/users";

// export const setUserLogin = (payload) => {
//     return { type: SET_USER_LOGIN, payload };
// };

export const userRegister = (newUser) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: usersUrl + "/register-admin",
            data: newUser,
        })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };
};

export const userLogin = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: usersUrl + "/login",
                data: user,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        });
    };
};
