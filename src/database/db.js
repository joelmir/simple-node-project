const Sequelize = require('sequelize');
const movieRepository = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite', 
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: './src/database/database.db',
    operatorAliases: false
});

const Movie = movieRepository.define('movie', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}, {
    'tablename': 'movie'
});

const init =() => {
    return movieRepository.sync();
}

module.exports = {
    init,
    Movie
}