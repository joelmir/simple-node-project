const server = require('./server');
const movieRepository = require('./database/db')
console.log('Hello World');
movieRepository.init().then(response => {
    server.init();
}).catch(error => {
    console.error(error)
});
