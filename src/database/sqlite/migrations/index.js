const sqliteconnection = require("../../sqlite/index");
const createUsers = require("./createUsers");
const createNotes = require("./createNotes");
const createTags = require("./createTags")

async function migrationsRun(){
    const schemas = [
        createUsers
        
    ].join('');

    sqliteconnection().then(db => db.exec(schemas));

    const schemas2 = [
        
        createNotes
    ].join('');

    sqliteconnection().then(db => db.exec(schemas2));

    const schemas3 = [
        createTags
    ].join('')

    sqliteconnection().then(db => db.exec(schemas3));
};

module.exports = migrationsRun;
