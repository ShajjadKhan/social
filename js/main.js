const profileIcon = document.querySelector('.profileImgContainer');
profileIcon.onclick = () =>{
  document.querySelector('.profileDetails').classList.toggle('active')
}
const chatIcons = document.querySelector('.chatIcons');
chatIcons.onclick = ()=>{
  document.querySelector('.chatListContainerJs').classList.toggle('active-chat');
  
}

document.querySelector('.arrowIcon').onclick= ()=>{
  document.querySelector('.chatBox').classList.remove('activeChatBox');

}
document.querySelector('.bellIcon').onclick= ()=>{
  document.querySelector('.notificationContainer').classList.toggle('active-notification');

}
document.querySelector('.userInput').onclick= ()=>{
  document.querySelector('.postPopUpContainer').style.display="flex";

}
document.querySelector('.cancelBtn').onclick= ()=>{
  document.querySelector('.postPopUpContainer').style.display="none";

}