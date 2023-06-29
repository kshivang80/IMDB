import axios from "axios"
import * as types from "./actionTypes"


export const getMovieRequest = () => {

    return {
        type: types.GET_MOVIES_REQUEST
    }
}


export const getMovieSuccess = (payload) => {

    return {
        type: types.GET_MOVIES_SUCCESS,
        payload
    }
}


export const getMovieError = () => {

    return {
        type: types.GET_MOVIES_ERROR
    }
}


export function getMovies({ year, country, query }) {

    return function (dispatch) {
        dispatch(getMovieRequest())

        let url = 'http://localhost:8080/movie';

        if (year && country && query) {
            url += `?year=${year}&country=${country}&title=${query}`;
        }
        else if (year && country) {
            url += `?year=${year}&country=${country}`;
        }
        else if (country && query) {
            url += `?country=${country}&title=${query}`;
        }

        else if (year) {
            url += `?year=${year}`;
        }
        else if (country) {
            url += `?country=${country}`;
        }
        else if (query) {
            url += `?title=${query}`;
        }



        return axios
            .get(url)
            .then((r) => {
                dispatch(getMovieSuccess(r.data));
                console.log(r.data)
            })
            .catch((e) => {
                dispatch(getMovieError())
            })
    }

}

