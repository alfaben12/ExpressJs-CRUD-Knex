const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'pulsa'
    },
    debug: true
});

module.exports = {
    getAll: async function() {
        return await knex('buku');    
    },

    getById: async function(id) {
        return await knex('buku').where('id', id);    
    },

    insert: async function(req){
        let judul = req.judul;
        let sinopsis = req.sinopsis;
        let penulis = req.penulis;
        
        await knex('buku').insert({
            'judul': judul,
            'sinopsis': sinopsis,
            'penulis': penulis
        })
    },

    update: async function(req, id){
        let judul = req.judul;
        let sinopsis = req.sinopsis;
        let penulis = req.penulis;
        
        await knex('buku').where('id', id).update({
            'judul': judul,
            'sinopsis': sinopsis,
            'penulis': penulis
        })   
    },

    delete: async function(id){
        await knex('buku').where('id', id).del()    
    }
}