import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.searchResList.innerHTML = "";
};

const lineCutter = (title, limit = 17) => {
  const text = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc+cur.length <= limit) {
        text.push(cur);
      }

      return acc + cur.length;
    }, 0);

    return `${text.join(' ')}...`;
  }
  return title;
};

const renderRecipe = recipe => {
  //will render one recipe at a time
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${lineCutter(recipe.title)}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${lineCutter(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>  
    `;

  //rendering the markup, we need to render to the ui in the result list class
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

const createButton = (page, type) => `
    
    <button class="btn-inline results__btn--prev">
        <svg class="search__icon">
            <use href="./img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="./img/icons.svg#icon-triangle-right"></use>
        </svg>
    </button>

`;

const renderButtons = (page, numRes, resPerPage) => {
    const pages = Math.ceil(numRes/resPerPage);

    if(page===1 && pages>1){
        //we want only next button
    }
    else if(page===pages && pages>1){
        //we want only the prev button
    }
    else{
        //we want both of the buttons
    }
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  //render the recipes in the UI. Not the console

  const start = (page-1)*resPerPage; //0 based indexing because slice method works on arrays
  const end = page*resPerPage;

  recipes.slice(start,end).forEach(element => {
    renderRecipe(element);
  });
};
