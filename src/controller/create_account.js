const User = require('../model/user');
const Group = require('../model/group');

module.exports = {

    async getData(req, res){

        const users = await User.findAll({
            raw: true,
            attributes: ['IDUser', 'Name', 'Password']
        })

        console.log(users);

        res.render('../view/create_account', {users});
    },


    async insertUser(req, res){
        const data = req.body;
        
        const check = await User.count({
            where: {
                Name: data.user
            }
        })
        if(check != 1){
            const picture = 'default_user.png';
            await User.create(
                {
                    Name: data.user,
                    Password: data.password,
                    Birth: data.birth,
                    Picture: picture
                }
            )
            res.redirect('/');
        } else {
            res.redirect('/createAccount')
        }
    }
}