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