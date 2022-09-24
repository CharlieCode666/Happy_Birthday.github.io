let showingAlert = false;

const title = '生日快樂 🥳';
const messages = '盧祺學';

const changeTitle = setInterval(() => {
  
  document.title = 
    showingAlert ? title : messages;
    
    showingAlert = !showingAlert;
    
}, 700);
