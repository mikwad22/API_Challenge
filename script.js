const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    if (response.status !== 200) {
      console.log(`Looks like there was a problem. Status Code: ${response.status}`);
    } else {
      
      return response.json();
    }
  })
  .then(data => {
    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const h4 = document.createElement('h4');
      h4.textContent = movie.release_date;

      // Create a p and set the text content to the film's description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 500) // Limit to 500 chars
      p.textContent = `${movie.description}` //

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(h4);
      card.appendChild(p);
      
    })
  })

