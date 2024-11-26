const searchedWord = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__icon");
const main = document.querySelector(".main");
const notFound = document.querySelector(".notfound");
const toggle = document.querySelector(".header__checkbox")
const emptyString = document.querySelector(".empty")
const selectors = document.querySelector(".header__font-selector")
const search = document.querySelector(".search")


document.addEventListener("DOMContentLoaded", () => {
  searchedWord.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const word = searchedWord.value.toLowerCase();

      if(searchedWord.value === '') {
        emptyStr()
        return;
      }

      getaWord(word);
      searchedWord.value = "";
    }
  });
  // Default font-family
  document.body.style.fontFamily = "sans-serif";
});

function toggleMode(){
    toggle.checked ? document.body.classList.add("darkmode") : document.body.classList.remove("darkmode")
}

toggle.addEventListener("click", toggleMode)

const getaWord = async (word) => {
  try {
    const res = fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const entries = await res;

    if (!entries.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await entries.json();
    displayData(data);

  } catch (error) {
    
    console.log(error.status, error.message);
    definitionNotFound();
  }
};

function displayData(data) {

   notFound.innerHTML = ''
   emptyStr.innerHTML = ''

  const audiourl =
    data[0].phonetics[0]?.audio ||
    data[0].phonetics[1]?.audio ||
    data[0].phonetics[2]?.audio;

    const phonetics = data[0].phonetics[1]?.text  || data[0].phonetic
   
   
  main.innerHTML = `<article class="definition">
      <div class="definition__word-container">
        <h1 class="definition__word">${data[0].word}</h1>
        <p class="definition__pronounciation">${phonetics}</p>
      </div>
     <div class="definition__audio-container">
  <audio class="definition__audio" src=${audiourl} ></audio>
  <svg xmlns="http://www.w3.org/2000/svg" class="play_image" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z" class="triangle"/></g></svg>
</div>

    </article>

    <article class="noun">
      <div class="noun__title-container">
        <h2 class="noun__title">noun</h2>
        <div class="verb__line"></div>
      </div>

      <p class="meaning">Meaning</p>
        <ul class="noun__list">
          ${data[0].meanings[0].definitions.map(
            ({ definition }) =>
              `<li>${definition}</li>
          `
          )}
        </ul>
      
        <div class="noun__synonyms">
          <p>Synonyms:</p>
        <ul class="noun__synonyms-list">
         ${data[0].meanings[0].synonyms.map(
           (synonym) => `<span>${synonym}</span>` 
         )}
        </ul>
        </div>
    </article>

    <article class="verb">
      <div class="verb-container">
        <h2 class="verb__title">Verb</h2>
        <div class="verb__line"></div>
      </div>

      <p class="meaning">Meaning</p>
        <ul class="verb__list">
         ${data[0].meanings[1].definitions.map(
           ({ definition }) =>
             `<li>${definition}</li>
          `
         )}
        </ul>
    </article>

    <div class="verb__line"></div>

    <div class="source">
      <p>Source</p>
      <a href=${data[0].sourceUrls[0]} target="_blank" class="source__link">
        <p class="source__text">${data[0].sourceUrls[0]}</p>
        <img class="source__icon" src="./assets/images/icon-new-window.svg" alt="external link icon">
      </a>
    </div>`;

  
    const audio = document.querySelector(".definition__audio");
    const playIcon = document.querySelector(".play_image");
    console.log(audio)
    console.log(playIcon)

    playIcon.addEventListener("click", () => {
        audio.play();
    })
 
}

function definitionNotFound(){
  main.innerHTML = "";
  emptyStr.innerHTML = "";
    notFound.innerHTML = `
      <h1>🫣</h1>
      <p class="notfound__text">No Definitions Found</p>
      <p class="notfound__paragraph">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    `   
}

function emptyStr(){
  main.innerHTML = "";
  notFound.innerHTML = "";
  emptyString.innerHTML = `
    <p class="empty__str">Whoops, can't be empty…</p>
  `  
  search.classList.add("empty__outline")
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const word = searchedWord.value.trim().toLowerCase();

  if(searchedWord.value === '') {
    emptyStr()
    return;
  }

  getaWord(word)
  searchedWord.value = "";
});

selectors.addEventListener("change", (e) => {
  const selectedFont = e.target.value;
  document.body.style.fontFamily = selectedFont
})








