const Sequelize = require('sequelize');

let dbCOnfig = {
    db: "game",
    username: "root",
    password: "Grishu9911@",
    port: 3306,
    host: 'localhost'
}

if (process.env.NODE_ENV === "production") {
    dbCOnfig = {
        db: "vwyw0nq1f0lr4img",
        username: "hzx71diy5kswop7o",
        password: "q2cxw6jmzu4ufzac",
        port: 3306,
        host: 'a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
    }
}

const sequelize = new Sequelize(dbCOnfig.db, dbCOnfig.username, dbCOnfig.password, {
    host: dbCOnfig.host,
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
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize,
    Games_results
};