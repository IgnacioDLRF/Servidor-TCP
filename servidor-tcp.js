const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    console.log('Datos recibidos: ' + data);
    socket.write('Hola Cliente\n');
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.error('Error: ' + err.message);
  });
});

server.listen(8080, () => {
  console.log('Servidor TCP corriendo en el puerto 8080');
});
