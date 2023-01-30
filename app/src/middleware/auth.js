import gun from '../server'

const checkLogin = () => {
    return new Promise((resolve, reject) => {
        var user = gun.user().recall({sessionStorage : true})
        
        if(user.is){
            resolve("User Is Log In")
        }else{
            reject("User Is Log Out")
        }
    })
}

export {checkLogin}