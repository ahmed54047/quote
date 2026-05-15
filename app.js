let containerquotes = document.querySelector('.container');

  fetch('https://dummyjson.com/quotes/random')
  .then((res) => res.json())
  .then((data) => {
    containerquotes.innerHTML = '';
    data.quotes.forEach((quote) => {
      // > انا بستخد الforeach  مع object     ,  اما لو  arry هستخدم map
      containerquotes.innerHTML += `
        <div class="quots">
          <h2>${quote.quote}</h2>
          <p>${quote.author}</p>
        </div> 
        <button> >  next</button>
      `;
    });
  });
