<<<<<<< HEAD
const database = require("./database/sqlite")
=======
const migrationsRun = require("./database/sqlite/migrations/index")
>>>>>>> c7c7a45 (fazendo3novo)

const express = require("express");

const routes = require("./routes");

const app = express();

<<<<<<< HEAD
database();
=======
migrationsRun();
>>>>>>> c7c7a45 (fazendo3novo)

app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`
    server está rodando na porta ${PORT}`);
});