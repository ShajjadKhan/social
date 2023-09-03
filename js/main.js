const profileIcon = document.querySelector('.profileImgContainer');
profileIcon.onclick = () =>{
  document.querySelector('.profileDetails').classList.toggle('active')
}
const chatIcons = document.querySelector('.chatIcons');
chatIcons.onclick = ()=>{
  document.querySelector('.chatBox').classList.toggle('activeChatBox');
  
}

document.querySelector('.arrowIcon').onclick= ()=>{
  document.querySelector('.chatBox').classList.remove('activeChatBox');

}