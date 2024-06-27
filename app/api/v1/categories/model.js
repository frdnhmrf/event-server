const exports = require('express').Router;
const router = exress();


router.get('/categories', function(req, res){
    res.status(200).json({
        message: 'Wecome to model js',
    })
});


let category = {

}