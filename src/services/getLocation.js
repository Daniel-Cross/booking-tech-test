import axios from 'axios';

const getLocation = query => {
  if (!query) {
    return Promise.resolve([]);
  }

  return axios
    .get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${query}`
    )
    .then(function (response) {
      return response.data.results.docs.map(location => location);
    })
    .catch(function (err) {
      console.error(err);
    });
};

export default getLocation;
