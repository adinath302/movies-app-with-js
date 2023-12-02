const apiurl =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgpath = "https://image.tmdb.org/t/p/w1280";
const searchapi =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector("#movie-box");
const getmovies = async (api) => {
    const response = await fetch(api)
    const data = await response.json()
    showmovies(data.results)
}

const showmovies = (data) => {
    moviebox.innerHTML = "";
    //empty the movie box
    data.forEach(
        (item) => {
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
          <img src="${imgpath + item.poster_path}" alt="" />
          <div class="overlay">
          <div class="title">
          <h2>${item.original_title}</h2>
          <span>${item.vote_average}</span>
          </div>
          <h3>Overview:</h3>
          <p>${item.overview}</p>
          </div>
         `;
            moviebox.appendChild(box)
        }
    );
}


document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getmovies(searchapi + event.target.value);
            // searched movies
        } else {
            getmovies(apiurl)
            //popular
        }
    }
)
// init call 
getmovies(apiurl);



