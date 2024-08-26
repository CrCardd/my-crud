const User = require('../model/user');
const Group = require('../model/group');

// Group.belongsTo(User, {                            //Relate tables, group has one user ID, which is it's owner
//         constraint: true,                      
//         foreignKey: 'IDUser',                   //Column from the foreign key come
//         as: 'IDOwner'                           //Column name
//     }
// );

User.belongsTo(Group, {
        constraint: true,                      
        foreignKey: 'IDGroup'
    }
);