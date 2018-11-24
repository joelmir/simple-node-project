const {Movie} = require('../database/db');
const _ = require('lodash');

const createMovie = (params) =>{
    if(_.isEmpty(params.name) || _.isEmpty(params.description)){
        // TODO
        return;
    }
    return Movie.create(params);
}

const readMovies = (params) => {
    return Movie.findAll()
}

const updateMovie = (id, params) => {
    return Movie.update(
        {
            ...params
        },
        {
            where: {id: id}
        }
    )
}

module.exports = {
    createMovie,
    readMovies,
    updateMovie
}