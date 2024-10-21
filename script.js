const display = document.querySelector(".content");
const wait = document.querySelector(".pending");

document.getElementById("result").addEventListener("keypress", (e) => {
  const input = document.getElementById("result").value;
  if (e.key === "Enter") {
    display.innerHTML = ``;
    wait.innerHTML = `<h1>Searching...</h1>`;
    async function getDetails() {
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${input}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.description && data.description.length > 0) {
        for (let i = 0; i < data.description.length; i++) {
          console.log(data.description[i]);
          let title = data.description[i]["#TITLE"];
          let url = data.description[i]["#IMDB_URL"];
          const img = new Image();
          img.src = data.description[i]["#IMG_POSTER"];
          img.onload = () => {
            wait.innerHTML = ``;
            display.insertAdjacentHTML(
              "beforeend",
              `<div class="items">
                <img src="${img.src}" alt="pic">
                <a href="${url}" target="_blank">${title}</a>
            </div>`
            );
          };
        }
      } else {
        wait.innerHTML = `<h1>Nothing Found :(</h1>`;
      }
    }
    getDetails();
  }
});
