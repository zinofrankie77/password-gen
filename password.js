const passwordInput = document.getElementById('password')
const button = document.getElementById('genBtn')
const btn = document.getElementById('reset')
const but = document.getElementById('speBtn')



    


button.addEventListener('click', generate)
function generate(){

    const passwordLenght = 10;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let RandomPassword = '';

    for (let index = 0; index < passwordLenght; index++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        
        RandomPassword += charset.charAt(randomIndex);
        // console.log(RandomPassword)
        
    }

    passwordInput.value = RandomPassword.toLocaleUpperCase();

}


    but.addEventListener('click', special)
function special(){

    const specialLenght = 10;
    const charsets = '@#$%&*+_!{}~?><|/.,[];=-';
    let RandomSpecial = '';

    for (let index = 0; index < specialLenght; index++) {
        const randomIndexs = Math.floor(Math.random() * charsets.length)
        
        RandomSpecial += charsets.charAt(randomIndexs);
    
        
    }

    passwordInput.value = RandomSpecial.toUpperCase();
}

    btn.addEventListener('click',rest)
    function rest(){
        passwordInput.value ='';
    }
        

    
        


    
        
    

    
