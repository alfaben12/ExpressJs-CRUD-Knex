const bukuModel = require("../models/buku")

module.exports = {
    index: function(req, res) {
        bukuModel.getAll().then(function (data) {
            res.render('list', {
                data: data,
            });
        });
    },
    
    add: function(req, res) {
        res.render('add')
    },
    
    processAdd: function(req, res) {
        bukuModel.insert(req.body).then(function () {
        });
        res.redirect('/')
    },
    
    modify: function(req, res) {
        bukuModel.getById(req.params.id).then(function (data) {
            res.render('edit', {
                data: data,
            });
        });
    },
    
    processModify: function(req, res) {
        bukuModel.update(req.body, req.params.id).then(function () {
        });
        res.redirect('/')
    },

    processDelete: function(req, res){
        bukuModel.delete(req.params.id).then(function () {
        });
        res.redirect('/')
    }
}