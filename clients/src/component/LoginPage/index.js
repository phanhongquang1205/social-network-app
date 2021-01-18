// let acountName = document.getElementById('acountcard').textContent
// console.log(acountName)
// let acountImg = document.getElementById('acountcard-img').style.backgroundImage = "url('https://file1.dangcongsan.vn/data/0/images/2020/12/17/vietha/baovechomeo-tb1.jpg?dpi=150&quality=100&w=680')"
let acount = [
    {name: 'quangkute@mlem.com', pass: 'quangkute', firstName: 'Phan', lastName: 'Quang'},
    {name: 'minhkute@mlem.com', pass: 'minhkute', firstName: 'Xuân', lastName: 'Minh'}
]
let nameUser ;
document.getElementById("login").addEventListener('click',() => {
    let userName = document.getElementById('username').value
    let passWord = document.getElementById('password').value
    for(let i = 0; i < acount.length ; i++){
        if(userName == acount[i].name){
            if(passWord == acount[i].pass){
                nameUser = acount[i].lastName+acount[i].firstName
                
                return
            }
        }
    }
    console.log('false')
    return
})
