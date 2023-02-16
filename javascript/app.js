const inputs = document.querySelectorAll(".contact-input")
const toggleBtn = document.querySelector('.theme-toggle')
const allElements = document.querySelectorAll('*')
const loader = document.getElementById('loader')

setInterval(() => {
   loader.classList.add('hidden')
}, 5000)

toggleBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark')

   allElements.forEach((el) => {
      el.classList.add('transition')
      setTimeout(() => {
         el.classList.remove('transition')
      }, 1000);
   })
})

inputs.forEach((inp) => {
   inp.addEventListener('focus', () => {
      inp.parentNode.classList.add('focus')
      inp.parentNode.classList.add('not-empty')
   })
   inp.addEventListener('blur', () => {
      if (inp.value == '') {
         inp.parentNode.classList.remove('not-empty')
      }
      inp.parentNode.classList.remove('focus')
   })
})