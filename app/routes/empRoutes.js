module.exports = (app)=>{
    const controller = require('../controller/empController')
    
    //GET
    app.get('/controller',controller.findAll);

    //GET BY Id
    app.get('/controller/:id',controller.findById);

    //POST
    app.post('/controller',controller.save);

    //UPDATE
    app.put('/controller/:id',controller.update);

    //DELETE
    app.delete('/controller/:id',controller.delete);

   
}