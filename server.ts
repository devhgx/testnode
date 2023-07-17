import * as http from 'http';
import Square from './src/square'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! '+new Square(4,5).area);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
