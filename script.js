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
const scriptURL = 'https://script.google.com/macros/s/AKfycbygwpSBodGYybfRpozClAt3sVcIv3rGON3mkTflNycmoxpDVvliZ063StLi-mz4SHOz9g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            form.reset();
            console.log('Success!', response)
            msg.innerHTML='Message sent successfully!';
            setTimeout(function(){
                msg.innerHTML="";
            },5000)
        })
      .catch(error => {
            console.error('Error!', error.message)
        })
  })