var contact = require('../model/contactmodel');

exports.addcontact = async (req, res)=> {
    var data = await contact.create(req.body);
    res.status(200).json({
        status : "data insert",
        data,
    })
}

exports.getcontact = async (req, res)=> {
    var data = await contact.find();
    res.status(200).json({
        status : "data get",
        data,
    })
}   

exports.deletecontact = async (req, res)=> {
    var data = await contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status : "data delete",
    })
} 

exports.updatecontact = async (req, res)=> {
    var data = await contact.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        status : "data update",
        data,
    })
}
exports.getcontactById = async (req, res)=> {
    var data = await contact.find({firstName:req.params.name});
    res.status(200).json({
        status : "data get",
        data,
    })
}

