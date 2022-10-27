const {user} = require('../models');

const userInfo = [{
    username: 'ShriRadha',
    password: 'ShriKrishna'
},
{
    username: 'ShriKrishnaChaitanyaMahaprabhu',
    password: 'ShriNityanandaPrabhu'
},
{
    username: 'Srilaprabhupada',
    password: 'Iskon'
}
];

const seedUsers = ()=> user.bulkCreate(userInfo);
module.exports = seedUsers;