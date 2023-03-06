var _ = require('lodash');

let users = [];

const SocketServer = (socket) => {
  // Connect - Disconnect
  socket.on("joinUser", (user, peer) => {
    users.push({
      id: user?._id,
      username: user?.username,
      avatar: user?.avatar,
      socketId: socket?.id,
      peerId: peer?.id,
      activeDate: new Date()

    });
    users = users.filter(user => Object.values(user).every(value => value !== undefined));
    
    users = Array.from(new Set(users.map(JSON.stringify))).map(JSON.parse);
    setInterval(() => {
      socket.emit("checkUserOnline", users)
      if (users.length > 0) {
        users.forEach((client) => {
          socket
          .to(`${client.socketId}`)
          .emit("checkUserOnline", users);
        });
      }
    }, 5000);
  });
  socket.on("disconnect", () => {
    const data = users.find((user) => user.socketId === socket.id);
    if (data) {

      if (users.length > 0) {
        users.forEach((client) => {
          socket.to(`${client.socketId}`).emit("CheckUserOffline", data.id);
        });
      }
    }
    users = users.filter((user) => user.socketId !== socket.id);
  });
};

module.exports = SocketServer;