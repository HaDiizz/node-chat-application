var _ = require('lodash');
const EditData = (data, id, call) => {
  const newData = data.map((item) =>
    item.id === id ? { ...item, call } : item
  );
  return newData;
};
let users = [];

const SocketServer = (socket) => {
  // Connect - Disconnect
  socket.on('joinUser', (user, peer) => {
    users.push({
      id: user?._id,
      username: user?.username,
      avatar: user?.avatar,
      socketId: socket?.id,
      peerId: peer?.id,
      activeDate: new Date(),
    });
    users = users.filter((user) =>
      Object.values(user).every((value) => value !== undefined)
    );

    users = Array.from(new Set(users.map(JSON.stringify))).map(JSON.parse);
    setInterval(() => {
      socket.emit('checkUserOnline', users);
      if (users.length > 0) {
        users.forEach((client) => {
          socket.to(`${client.socketId}`).emit('checkUserOnline', users);
        });
      }
    }, 5000);
  });
  socket.on('disconnect', () => {
    const data = users.find((user) => user.socketId === socket.id);
    if (data) {
      // socket.to(`${data.socketId}`).emit('CheckUserOffline', data.id);
      if (users.length > 0) {
        users.forEach((client) => {
          if(data.call) {
            data.call === client.id && socket.to(`${client.socketId}`).emit('endCallToClient', data);
            data.id === client.id && socket.to(`${client.socketId}`).emit('endCallToClient', data);
          }
          socket.to(`${client.socketId}`).emit('CheckUserOffline', data.id);
        });
      }
    }
    users = users.filter((user) => user.socketId !== socket.id);
  });

  // Call
  socket.on('callUser', (data) => {
    users = EditData(users, data.sender, data.recipient);
    const client = users.find((user) => user.id === data.recipient);
    if (client) {
      if (client.call) {
        users = EditData(users, data.sender, null);
        socket.emit('userBusy', data);
      } else {
        users = EditData(users, data.recipient, data.sender);
        socket.to(`${client.socketId}`).emit('callUserToClient', data);
      }
    }
  });

  socket.on('endCall', (data) => {
    const client = users.find((user) => user.id === data.sender);
    if (client) {
      socket.to(`${client.socketId}`).emit('endCallToClient', data);
      users = EditData(users, client.id, null);
      if (client.call) {
        const clientCall = users.find((user) => user.id === client.call);
        clientCall &&
          socket.to(`${clientCall.socketId}`).emit('endCallToClient', data);
        users = EditData(users, client.call, null);
      }
    }
  });
};

module.exports = SocketServer;
