const TOKEN_KEY = 'jwt';

var checklogin = {

    login : () => {
        console.log("Token created!");
        localStorage.setItem(TOKEN_KEY, 'TestLogin');
    },
    
    logout : () => {
        localStorage.removeItem(TOKEN_KEY);
    },
    
    isLogin : () => {
        if (localStorage.getItem(TOKEN_KEY)) {
            return true;
        }
    
        return false;
    }

}


module.exports = checklogin;