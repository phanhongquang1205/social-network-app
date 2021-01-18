function maker() {
    let firstName = document.getElementById('first-name')
    let lastName = document.getElementById('last-name')
    let pswd = document.getElementById('pswd')
    let email = document.getElementById('email')
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
    if (firstName.value.length == 0) {
        firstName.classList.add('is-invalid')
    }
    else { firstName.classList.remove('is-invalid') }
    if (lastName.value.length == 0) {
        lastName.classList.add('is-invalid')
    }
    else { lastName.classList.remove('is-invalid') }
    if (email.value.indexOf('@') != -1 && email.value.indexOf('.com') != -1 ) {
        email.classList.remove('is-invalid')
    }
    else { email.classList.add('is-invalid') }
    if (pswd.value.length <=8 ) {
        pswd.classList.add('is-invalid')
    }
    else { pswd.classList.remove('is-invalid') }
    return
}
let container = document.getElementById('container')
let gnrVisid = document.getElementById('gnr-visid')
document.getElementById('nu').addEventListener('click', () => {
    container.classList.add('child')
    container.classList.remove('child-two')
    gnrVisid.style = 'position: absolute; visibility: hidden;'
})
document.getElementById('nam').addEventListener('click', () => {
    container.classList.add('child')
    container.classList.remove('child-two')
    gnrVisid.style = 'position: absolute; visibility: hidden;'
})
document.getElementById('khac').addEventListener('click', () => {
    container.classList.remove('child')
    container.classList.add('child-two')
    gnrVisid.style = 'position: relative; visibility: visible;'
})

