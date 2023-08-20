// ------- About tab -------- 
let openedTab="Skills";
function openTab(tabName){
    tabs=document.getElementsByClassName(openedTab);
    for (let element of tabs){
        element.classList.remove('active-tab');
    }
    tabs=document.getElementsByClassName(tabName);
    for (let element of tabs){
        element.classList.add('active-tab');
    }
    openedTab=tabName;
}

// ---------- Side Menu --------- 
const sideMenu=document.getElementById('sideMenu');
function openMenu(){
    sideMenu.style.right='0';
}
function closeMenu(){
    sideMenu.style.right='-200px';
}

// --------- Contact Form --------
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbz1o8V0jdHH5qOvots2hNILFxXuJhwWn3kJi_u8zFF9uzdQ_-QPrIzj1E2mTHKUZo0n/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})*/