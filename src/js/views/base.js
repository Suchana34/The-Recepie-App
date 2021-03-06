export const elements = {
  searchInput: document.querySelector(".search__field"),
  searchForm: document.querySelector(".search"),
  searchResList: document.querySelector(".results__list"),
  searchRes: document.querySelector(".results"),
};

/*
export const elementsString = () => {
    loader = 'loader';
};
*/

//ajax load spinner
export const renderLoader = (parent) => {
    const loader = `
        <div class = "loader">
            <svg>
                <use href = "img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = ()=>{
    const loader = document.querySelector(`.loader`);

    if(loader){
        loader.parentElement.removeChild(loader);
    }
};