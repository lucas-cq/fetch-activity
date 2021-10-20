fetch('https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    const ghibliElement = document.querySelector('.ghibli');
    ghibliElement.innerHTML = `
    <h2>${data.title}</h2>
     <figure>
      <img src="${data.image}" alt="Random Movie">
      <figcaption>${data.title}. Original: ${data.original_title}</figcaption>
    </figure>
    `;
    console.log(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });