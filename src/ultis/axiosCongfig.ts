import axios from "axios";
import envConfig from "../../config";
import { store } from "@/store/store";

const instance = axios.create({
    baseURL: envConfig.NEXT_PUBLIC_API_ENDPOINT,
});

instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = store?.getState()?.auth.account?.token;
        if (!!token) {
            config.headers["Authorization"] = "Bearer " + token;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;
