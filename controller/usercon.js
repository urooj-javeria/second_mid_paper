const User = require('../model/user');

const create = (req, res) => {
    res.render('regisform');
}




const updateuser = async (req, res) => {
    const id = req.params.id;

    const a = await User.updateMany({_id:id},{name: req.body.name, email: req.body.email,pnumber:req.body.pnumber,country:req.body.country,state:req.body.state,zip:req.body.zip ,image: req.body.image});
    res.redirect('/display');
}



const deleteuser = async (req, res) => {
    const id = req.params.id;
    const use = await User.findByIdAndDelete(id);
    res.redirect('/dispaly');
}

module.exports = {create, updateuser,deleteuser};