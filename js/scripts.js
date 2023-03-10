
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
  });
});