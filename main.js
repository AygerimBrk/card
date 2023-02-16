let table = document.querySelector(".form");

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      table.innerHTML += ` <div class='card_class'><img class='card_img' src=${item.Poster}>
      <h4 class='card_title'>${item.Title}</h4>
      <p class='card_year'>${item.Year}</p> </div>`;
    })
  );
