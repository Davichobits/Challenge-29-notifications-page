const notificationsNumber = document.querySelector('#notifications-number');
const posts = document.querySelectorAll('.post')

posts.forEach(post =>{
  post.addEventListener('click',(event)=>{
    post.querySelector('.status').classList.remove('not-read')
    updateNotifications()
  })
})



// recoger elementos status

const updateNotifications = () => {
  const notReadElements = document.querySelectorAll('.not-read');
  let notifications = notReadElements.length;
  notificationsNumber.innerText = notifications;
}

updateNotifications()

const markAllBtn = document.querySelector('#mark-all');

markAllBtn.addEventListener('click', ()=>{
  // Quitar todos las clases not read
  const notReadElements = document.querySelectorAll('.not-read');
  notReadElements.forEach(notReadElement => {
    notReadElement.classList.remove('not-read')
  })
  updateNotifications()
})