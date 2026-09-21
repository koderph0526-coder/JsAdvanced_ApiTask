# Javascript Advanced Task 3: API-Task

Canvas oppgave link:
'https://jobloop.instructure.com/courses/557/assignments/11020'

**Deadline/due: _Thursday 11_, 24.09.26**

Krav til oppgaven
For å sikre at du utfordrer deg selv, må prosjektet ditt inkludere en viss grad av kompleksitet, for eksempel:

- Et API med flere ulike endepunkter som du bruker i prosjektet ditt. []
- Et API med et endepunkt som aksepterer parametere i URL-en. []
- API-data som må kjøres gjennom en løkke for å hente/generere innhold. []

Prosjektet ditt må oppfylle minst to av disse kriteriene

## I'm Going with Jikan REST API

- Simply because I believe I can utilize this in my local storage task to implement a search function in addition to adding shows manually.
- In short I think what I'm envisioning is a small dashboard that can be used as a search engine to find what you're looking for of anime or characters, that also allows you to sort all the shows by genre or ask for a random show suggestion.

1. Read documentation on https://docs.api.jikan.moe/ []

- Note: unlimited daily requests, 60 request per minute, 3 requests per second. This should not be an issue.

2. Choose which endpoints to use:

- SideA: Anime -> title(japanese and english), img, totalt episodes, release year. []
  -SideA: Characters -> Name, img, which anime they're from(Simply attach the anime card at the bottom?) []
  -SideB: Genre(list that can be sorted in different ways) []
  -SideB: Random(button that fetches a random show an dprints a card conatining it's information above the genre list) []
  Specific(chosen/limited) data about the animes from the list. Make a way to search for characters, which adds cards that display the characters name as the title, an img of the character if possible and which anime thy're from -> make it so it displays all characters available per letter? can it even sort that way? Sort anime by genres and/or have a random button.
  (Just the super rough dea, don't quite know if possible yet)
- Fetch anime title in japanese, "subtitle" the japapnese by fetching the anime title in english, fetch anime img,, total of episodes, year it was released(?)

3. Make a draft of design ideas. []

- As a rought idea-design: I want it to be a page in soft, almost shimmery/metallic blue and violet/purple tones that allows the user to do two main things, search/request for information on shows/characters and request animelist based on genre or a a random suggestion. I want the header to include the title of the page itself("AnimeAssistant"?) and a "toggle" of sorts to the left and the right of the screen, reminicent of a folder/file system that the user can swap between.

4. Fetch the API, check that it's connected []
5. Figure out how to fetch the specific data you want.[]
6. Adjust styling to create cards with the data fetched from API url []
7. Create elements to store the different data sets in, run a forEach() to create seperate cards for each anime []
8. Append the information into the cards in the desired order. []
9. Use a similar design for the genreCards, perhaps a sligthly different hue and size?
10. Equip .map(), .sort() and .filter() accordingly to fetch the cards containing the animes depending on genre, default sort all available shows from a-z. []
11. Remeber to put in a loading function/animation, as the Genre part of the page likely will take some time to load. []

12. If possible it would be cool to be able to integrate a localstorage here as well to be able to create lists of shows the user would like to watch or consider watching. And which shows was previously searched for.
