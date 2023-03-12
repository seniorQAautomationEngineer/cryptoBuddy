const searchForm = document.querySelector('#searchForm');
const coinList = document.querySelector('#coinList');
const countryList =  document.querySelector('#countryList');
const socialNetworkList = document.querySelector('#socialNetworks');
const cryptoTypeList = document.querySelector('#cryptoType');
const clearResultsBtn = document.querySelector('#clearBtn');
const searchResultsTable = document.querySelector('#searchResults');
const headerTable  = document.querySelector('#headerTable');
const searchResultsContainer = document.querySelector('#searchResultsContainer');

document.addEventListener('DOMContentLoaded', function() {
  fetch('./json/cryptoData.json')
    .then(response => response.json())
    .then(data => {
      const coins = data.coins;
      const countries = data.countries;
      const socialNetworks = data.socialNetworks;
      const types = data.types;

      coins.forEach(function(coin) {
        const option = document.createElement('option');
        option.value = coin.name;
        option.textContent = coin.name;
        coinList.appendChild(option);
      });

      countries.forEach(function(country) {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        countryList.appendChild(option);
      });

      socialNetworks.forEach(function(socialNetwork) {
        const option = document.createElement('option');
        option.value = socialNetwork.name;
        option.textContent = socialNetwork.name;
        socialNetworkList.appendChild(option);
      });

      types.forEach(function(type) {
        const option = document.createElement('option');
        option.value = type.name;
        option.textContent = type.name;
        cryptoTypeList.appendChild(option);
      });
    })
    .catch(error => console.error(error));
});



// handle form submission
searchForm.addEventListener('submit', event => {
  event.preventDefault();

  // get the selected values from the form
  const coin = coinList.value;
  const country = countryList.value;
  const socialNetwork = socialNetworkList.value;
  const cryptoType = cryptoTypeList.value;

  // fetch the data from the JSON file
  fetch('json/searchResults.json')
    .then(response => response.json())
    .then(data => {
      // filter the data based on the selected values
      const filteredData = data.coins.filter(item => {
        return item.name === coin && item.groups.some(group => group.source === socialNetwork && group.type === cryptoType);
      });

     // insert the HTML into the search results table
      if (filteredData.length > 0) {
        let html = '';
        filteredData.forEach(item => {
          const name = item.name;
          item.groups.forEach(group => {
            const description = group.description;
            const link = group.link;
            const source = group.source;
            const type = group.type;
            html += `<tr><td>${name}</td><td>${description}</td><td>${source}</td><td>${type}</td><td><a href="${link}" target="_blank">${link}</a></td></tr>`;
          });
        });
        searchResultsTable.querySelector('tbody').innerHTML = html;
        headerTable.classList.remove('hidden');
        searchResultsContainer.style.display = 'block'; // Display the search results container
      } else {
        searchResultsTable.querySelector('tbody').innerHTML = '<tr><td colspan="3">No search results found.</td></tr>';
        searchResultsContainer.style.display = 'block'; // Display the search results container
      }

    })
    .catch(error => console.error(error));
});

