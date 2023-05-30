const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 10

const showNotification = () => {
   const notification = document.createElement('div');
   notification.innerText = '¡Carga completada!';
   notification.classList.add('notification');
   notification.style.color = '#fff';
   notification.style.fontSize = '50px'
   document.body.appendChild(notification);
};

const blurring = () => {
   load++

   if (load > 99) {
      clearInterval(int)
      showNotification()
   }

   loadText.innerText = `${load}%`
   loadText.style.opacity = scale(load, 0, 100, 1, 0)
   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

let int = setInterval(blurring, 60)

const scale = (num, in_min, in_max, out_min, out_max) => {
   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}