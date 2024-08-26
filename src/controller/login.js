const Users = require('../model/user');
const Groups = require('../model/group');
const {Op} = require('sequelize');

module.exports = {
    async login(req, res){
        const data = req.body;
        
        const check = await Users.count({
                where: {
                    [Op.and]: [
                        {Name: data.user_login},
                        {Password: data.user_password}
                    ]
                }
            });
            
            if(check != 1){
                res.redirect('/')
                return;
            }
            
        const users_ = await Users.findAll({
            raw: true,
            attributes: ['IDUser', 'Name', 'Birth', 'IDGroup', 'Picture']
        });

        const groups_ = await Groups.findAll({
            raw: true,
            attributes: ['IDGroup', 'Name', 'Description']
        });



        res.render('../view/allUsers', { users_, groups_ })
    }
}