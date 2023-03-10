let searchOptions = $("#mainSearchOptions");


$.getJSON('./json/cryptoData.json', function(data) {
  $(function () {
    debugger;
    searchOptions.on("change", function () {
      debugger;
      if (searchOptions.val() == "Coin") {
        $("#coinList").show()
        var coins = data.coins;

        $.each(coins, function(index, coin) {
        $('#coinList').append('<option value="' + coin.name + '">' + coin.name + '</option>')
        });
      } else if (searchOptions.val() == "Country"){
        $("#countryList").show()
        var countries = data.countries;
        $.each(countries, function(index, country) {
          $('#countryList').append('<option value="' +  country.name + '">' +  country.name + '</option>')
        });
      }
    });
  });
});