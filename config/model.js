const Sequelize = require('sequelize');

const sequelize = new Sequelize("game", "root", "Grishu9911@", {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

const Games_results = sequelize.define('game_results', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    player: Sequelize.STRING,
    result: Sequelize.INTEGER,
});

module.exports = {
    Sequelize: Sequelize,
    sequelize,
    Games_results
};