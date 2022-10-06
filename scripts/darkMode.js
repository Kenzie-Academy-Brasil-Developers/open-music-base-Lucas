function handleDarkMode() {
    const dmButton = document.getElementById('darkMode')    
    const html = document.querySelector('html')
  
    dmButton.addEventListener('click', () => {
      html.classList.toggle('dark-mode')
      dmButton.classList.toggle('text-white')

      const dmPref = localStorage.getItem('darkmode')

      if(!dmPref){
        localStorage.setItem('darkmode', true)
      }
      if(dmPref){
        localStorage.removeItem('darkmode')
      }

      if(dmButton.classList.contains('text-white')){
        dmButton.src = './assets/img/sun.svg  '
      }else{
        dmButton.src = './assets/img/moon.svg'
      }
    
    })
   
}
handleDarkMode()
