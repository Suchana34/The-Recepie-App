import Search from "./models/Search";
import { elements , renderLoader, clearLoader} from "./views/base";
import * as searchView from "./views/searchView";
import * as ErrorView from "./views/error";

//The controller file. Put all the controllers in the same file it makes a lot easier
//Global state of the app
// - Search Object
// - Current recipe object
// - Shopping list object
// - Liked recipes

const state = {};

const controlSearch = async () => {
  //1) Get query from the view
  //TODO
  const query = searchView.getInput(); //we need to put a method here from view section

  if (query) {
    //2) A new search object and add to the state
    state.search = new Search(query);
  } else {
  }
  //3) Prepare UI for results
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchRes);

  //4) Search for recipes

  await state.search.getResult();

  //5) Render the results in UI (step 4 needs to be working in async with this)
  clearLoader();
  searchView.renderResults(state.search.result);
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
