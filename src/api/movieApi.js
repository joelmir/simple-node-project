const movieService = require('../services/movieService');

const doCreateMovie = (req, res, next) => {
    movieService.createMovie(req.body).then(response => {
        res.send({success:true});
        next();
    }).catch(error => {
        res.status(500);
        res.send({
            code: 500,
            message: ' Error on create movie'
        })
        console.error(error);
    })
}

const doReadMovies = (req, res, next) => {
    movieService.readMovies(req.body).then(response => {
        res.send(response);
        next();
    }).catch(error => {
        res.status(500);
        res.send({
            code: 500,
            message: ' Error on get movies'
        })
        console.error(error);
    })
}

const doUpdateMovie = (req, res, next) => {
    const movieId = req.params.id;
    movieService.updateMovie(movieId, req.body).then(response => {
        res.send(response);
        next();
    }).catch(error => {
        res.status(500);
        res.send({
            code: 500,
            message: ' Error on update movie'
        })
        console.error(error);
    })
}

const doDeleteMovie = (req, res, next) => {
    const movieId = req.params.id;
    movieService.removeMovie(movieId).then(response => {
        res.send({success:true});
        next();
    }).catch(error => {
        res.status(500);
        res.send({
            code: 500,
            message: ' Error on delete movie'
        })
        console.error(error);
    })
}



module.exports = {
    doCreateMovie,
    doReadMovies,
    doUpdateMovie,
    doDeleteMovie
}