const popuplinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if(popuplinks.length>0){
    for(let index=0; index<popuplinks.length; index++){
        const popuplink = popuplinks[index];
        popuplink.addEventListener("click", function(e) {
            const popupName = popuplink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length>0){
    for(let index=0; index<popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if(popupActive) {
            popupClose(popupActive,false);
        }else {
            // bodyLock();
        }

        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(e) {
            if (!e.target.closest('.popup_content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            // bodyLock()
        }
    }
}

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     for (let index =0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
//     }

//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = 'false';

//     setTimeout(function () {
//         unlock = true;

//     }, timeout);
// }


// function bodyUnLock() {
//     setTimeout(function () {
//         for(let index = 0; index < lockPadding.length; index++){
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }