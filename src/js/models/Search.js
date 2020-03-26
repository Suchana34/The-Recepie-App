import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult(query) {
    //fetch doesnt work in case of old browsers so we r going to use axios (a http library)
    //fetch('URL'); axios automatically returns in json format
    //const proxy - not used in case of this api, but maybe used for others
    //const key - not used in case of this api, but maybe used in case of others

    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
