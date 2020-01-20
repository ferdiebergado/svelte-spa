import axios from "axios";
import { push } from "svelte-spa-router";
import { error as e } from "../store";

class Client {
    constructor() {
        let client = axios.create({
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        client.defaults.headers.post["Content-Type"] = "application/json";
        client.defaults.headers.put["Content-Type"] = "application/json";
        client.defaults.withCredentials = true;
        client.interceptors.response.use(this.handleSuccess, this.handleError);
        this.client = client;
    }

    getInstance() {
        return this.client;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (e.response.status == 401) {
                push("/login");
            } else {
                e.set(error.response.data.error);
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            e.set(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            e.set(error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    }
}

export default new Client;