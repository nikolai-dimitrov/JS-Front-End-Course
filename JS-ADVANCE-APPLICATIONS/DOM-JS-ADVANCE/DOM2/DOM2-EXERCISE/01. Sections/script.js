function create(words) {
   let containerElement = document.getElementById('content');
   words.forEach((x) => {
      let divElement = document.createElement('div');
      divElement.addEventListener('click', onClick)
      containerElement.appendChild(divElement);
      let paragraphElement = document.createElement('p')
      paragraphElement.style.display = 'none'
      paragraphElement.textContent = x;
      divElement.appendChild(paragraphElement);

   });
   function onClick(event) {
      let paragraphElement = event.target.children[0];
      paragraphElement.style.display = 'block';
   }
}