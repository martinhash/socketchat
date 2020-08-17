const { io } = require("../server");
const { Users } = require("../models/users.model");

users = new Users();
io.on("connection", (client) => {
  client.on("", (user, callback) => {
    if (!user.name) {
      return callback({
        error: true,
        message: "The name es Neccesary",
      });
    }
    let persons = users.addPerson(client.id, user.name);
    callback(persons);
  });
});
