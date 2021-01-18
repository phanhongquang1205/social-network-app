const { v4: uuidv4 } = require('uuid');

module.exports.users= [
    {
        id: uuidv4(),
        email: 'quang@gmail.com',
        password: 'quangkute',
        firstName: 'Phan',
        lastName: 'Quang',
        birthday: '12/05/1999',
        gender: 'male'
    },
    {
        id: uuidv4(),
        email: 'minh@gmail.com',
        password: 'minhkute',
        firstName: 'Xuan',
        lastName: 'Minh',
        birthday: '12/04/1999',
        gender: 'male'
    },
    {
        id: uuidv4(),
        email: 'thuan@gmail.com',
        password: 'datkute',
        firstName: 'Tran',
        lastName: 'Dat',
        birthday: '18/04/1999',
        gender: 'female'
    }
]