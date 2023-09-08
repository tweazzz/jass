const input = document.getElementById('password-input');
function show_hide_password(target){
    
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
        return false;
    }   

const input2 = document.getElementById('password-input-2');
function show_hide_password2(target){
    if (input2.getAttribute('type') == 'password') {
        target.classList.add('view');
        input2.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input2.setAttribute('type', 'password');
    }
        return false;
    }   
console.log("hELOOOO");




