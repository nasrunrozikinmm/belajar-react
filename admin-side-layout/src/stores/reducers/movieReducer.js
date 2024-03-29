import { SET_MOVIES, SET_MOVIES_ERROR, SET_MOVIES_LOADING, GET_SINGLE_MOVIE, SET_SEARCH, GET_ALL_GENRE } from "../actionTypes/movieType";

const initialState = {
    movies: [],
    moviesError: null,
    moviesLoading: false,
    movie: {
        title: "",
        slug: "ini slug",
        synopsis: "",
        trailerUrl: "",
        imgUrl: "",
        rating: "",
        price: "",
        GenreId: "",
    },
    search: "",
    allGenre: [],
};

function movieReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MOVIES:
            return { ...state, movies: payload };
        case SET_MOVIES_ERROR:
            return { ...state, moviesError: payload };
        case SET_MOVIES_LOADING:
            return { ...state, moviesLoading: payload };
        case GET_SINGLE_MOVIE:
            return { ...state, movie: payload };
        case SET_SEARCH:
            return { ...state, search: payload };
        case GET_ALL_GENRE:
            return { ...state, allGenre: payload };
        default:
            return state;
    }
}
export default movieReducer;
