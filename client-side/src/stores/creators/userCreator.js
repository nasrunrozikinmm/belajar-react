import axios from "axios";
import { SET_USER_LOGIN } from "../types/userType";

// const usersUrl = "http://localhost3001/users";
const usersUrl = "https://movie-deploy-server.herokuapp.com/users";

export const setUserLogin = (payload) => {
    return { type: SET_USER_LOGIN, payload };
};

export const userRegister = (newUser) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: usersUrl + "/register-cust",
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
export const topUpMoney = (userId, money) => {
    return (dispatch) => {
        axios({
            method: "patch",
            url: usersUrl,
            data: { money },
            headers: { access_token: localStorage.access_token, userId },
        })
            .then(({ data }) => {
                console.log(data);
                dispatch(getUser(userId));
            })
            .catch((error) => console.log(error));
    };
};

export const getUser = (userId) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: usersUrl,
            headers: { access_token: localStorage.access_token, userId },
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(setUserLogin(data));
            })
            .catch((error) => console.log(error));
    };
};
