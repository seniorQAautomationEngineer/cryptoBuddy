
$.getJSON('./json/cryptoData.json', function(data) {
  $(function () {
    var coins = data.coins;
    $.each(coins, function(index, coin) {
    $('#coinList').append('<option value="' + coin.name + '">' + coin.name + '</option>')
    });
    var countries = data.countries;
    $.each(countries, function(index, country) {
    $('#countryList').append('<option value="' +  country.name + '">' +  country.name + '</option>')
    });
    var socialNetworks = data.socialNetworks;
    $.each(socialNetworks, function(index, socialNetwork) {
    $('#socialNetworks').append('<option value="' +  socialNetwork.name + '">' +  socialNetwork.name + '</option>')
    });
    var types = data.types;
    $.each(types, function(index, type) {
    $('#cryptoType').append('<option value="' +  type.name + '">' +  type.name + '</option>')
    });
  });
});



document.querySelector('#searchForm').addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the selected values from the form
  const coin = document.querySelector('#coinList').value;
  const country = document.querySelector('#countryList').value;
  const socialNetwork = document.querySelector('#socialNetworks').value;
  const cryptoType = document.querySelector('#cryptoType').value;

  // fetch the data from the JSON file
  fetch('json/searchResults.json')
    .then(response => response.json())
    .then(data => {
      debugger;
      // filter the data based on the selected values
      const filteredData = data.coins.filter(item => {
        return item.name === coin && item.groups.some(group => group.source === socialNetwork && group.type === cryptoType);
      });

    // build the HTML for the search results table
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
    })
    .catch(error => console.error(error));
});