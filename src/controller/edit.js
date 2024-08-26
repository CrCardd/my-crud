const Users = require('../model/user');

module.exports = {
    async delete_user(req,res){
        const id = req.params.id;

        await Users.destroy({
            where: {
                IDUser: id
            }
        })
        res.redirect('/login');
    }

}