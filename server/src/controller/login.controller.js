const {users} = require('../data/user.data')

module.exports.login = (req,res) =>{
    const {email, password} = req.body
    user = users.find(user => user.email === email && password === user.password)
    if(user){
        res.json({status: 'success'})
    }
    else{
        res.json({status: 'error', message:'Email or password incorrect'})
    }
} 