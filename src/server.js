import Hapi from '@hapi/hapi';
import { booksRoute } from './routes/books.js';

const server = Hapi.server({
    port: 9000,
    host: 'localhost',
});

server.route(booksRoute);

const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
