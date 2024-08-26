const Group = require('../model/group');
const User = require('../model/user');
require('../model/association');


module.exports = {
    async getHome(req, res){
        const groups = await Group.findAll({
            raw: true,
            attributes: ['IDGroup', 'Name', 'Description', 'Capacity']
        });
        const users = await User.findAll({
            raw: true,
            attributes: ['IDUser', 'Name', 'Birth', 'Password', 'Picture']
        });



        res.render('../view/index', { groups, users });
    }
}