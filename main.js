const url = "https://api.jikan.moe/v4/";
const animeUrl = "https://docs.api.jikan.moe/#/anime";

// Gotta find out how to access the array/data from the link, seems the one above is msinly doumenation link...
const mainB = document.querySelector(".mainBody");

// Check it the url connects and fetches data:
async function fetchAnimeData(animeUrl) {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json(url.data.name);
  //   } catch (error) {
  //     console.error(`Failed to fetch data:`, error);
  //   }
  if (url === "https://api.jikan.moe/v4/") {
    fetch(animeUrl)
      .then((res) => res.json())
      .then((data) => displayAnime(data))
      .catch((err) => console.error("Error, cannot find the link", err));
  } else if (url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayAnime(data.anime.title))
      .catch((err) => console.log(err));
  } else {
    console.log("Could not fetch url/data");
  }
}
console.log(fetchAnimeData);
