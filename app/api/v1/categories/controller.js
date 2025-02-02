const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const {name} = req.body;
        const result = await Categories.create({name});
        res.status(201).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await Categories.find();
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await Categories.findOne({_id : id});

        if(!result){
            return res.status(404).json({message: 'No such category'});
        }
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
const update = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const check = await Categories.findById({_id : id});

        if(!check){
            return res.status(404).json({message: 'No such category'});
        }
        check.name = name;
        await  check.save();
        
        res.status(200).json({
            data: check,
        });
    } catch (error) {
        next(error);
    }
};
const destroy = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleteData = await Categories.findOneAndDelete(id);
        res.status(200).json({
            data: deleteData,
        });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    index,
    create,
    find,
    update,
    destroy,
};