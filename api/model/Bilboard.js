let db = require('../config/db');

let Bilboard = {

    get: function(callback){
        db.query('SELECT*FROM bilboard', callback)
    },

    getById: function(id, callback){
        db.query(`SELECT*FROM bilboard where id = ${id}`, callback);
    },

    create: function(bilboard, callback){
        db.query('INSERT INTO bilboard SET ?', bilboard, callback);
    },

    update: function(bilboard, id, callback){
        db.query('UPDATE bilboard SET ? WHERE id = ?', [bilboard, id], callback);
    },

    delete: function(id, callback){
        db.query(`DELETE FROM bilboard WHERE id = ${id}`, callback);
    }
};

module.exports = Bilboard;