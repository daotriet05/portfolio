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

const sideMenu=document.getElementById('sideMenu');
function openMenu(){
    sideMenu.style.right='0';
}
function closeMenu(){
    sideMenu.style.right='-200px';
}