let containerquotes = document.querySelector('.container');

fetch('https://dummyjson.com/quotes?limit=1&skip=4')
  .then((res) => res.json())
  .then((data) => {
    containerquotes.innerHTML = '';
    data.quotes.forEach((quote) => {
      // > انا بستخدم foreach مع object , اما لو array هستخدم map
      containerquotes.innerHTML += `
        <div class="quots">
          <h2>${quote.quote}</h2>
          <p>${quote.author}</p>
        </div> 
        <button> > next</button>
      `;
    });
  });
