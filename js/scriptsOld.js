var mainOptionsList = [
  { CoinName: 'Coin', State: 'Bitcoin' },
  { CoinName: 'Coin', State: 'Solana' },
  { CoinName: 'Coin', State: 'Shiba' },
  { CoinName: 'Coin', State: 'Sushi'},
  { CoinName: 'Coin', State: 'Avalanche' },
  { CoinName: 'Coin', State: 'Galaxy' },
  { CoinName: 'Coin', State: 'Other' },
  { CountryName: 'Country', State: 'US' },
  { CountryName: 'Country', State: 'Canada'},
  { CountryName: 'Country', State: 'India' },
  { CountryName: 'Country', State: 'Germany'},
  { CountryName: 'Country', State: 'France' },
  { CountryName: 'Country', State: 'UK'},
  { CountryName: 'Country', State: 'UAE' }
];

var cityList = [
  { State: 'Maharashtra', city: 'Pune' },
  { State: 'Maharashtra', city: 'Mumbai' },
  { State: 'Maharashtra', city: 'Hydrabad' },
  { State: 'Delhi', city: 'New Delhi' },
  { State: 'Delhi', city: 'Balijt Vihar' },
  { State: 'Punjab', city: 'Ludhiyana' },
  { State: 'Punjab', city: 'Amritsar' },
  { State: 'Punjab', city: 'Patiyala' },
  { State: 'Punjab', city: 'Jalandhar' },
  { State: 'Alabama', city: 'Abbeville' },
  { State: 'Alabama', city: 'Adamsville' },
  { State: 'Arizona', city: 'Phoenix' },
  { State: 'Arizona', city: 'Tucson' },
  { State: 'Other', city: 'Other' }
];

let searchOptions = $("#mainSearchOptions");

$(document).ready(function () {
  debugger;
  $("#dpdlState").hide();
  searchOptions.change(function () {
    debugger;
    if (searchOptions.val() == "Coin") {
      $("#dpdlState").show()
      const cryptoName = mainOptionsList.filter(m => m.CoinName == searchOptions.val());
      cryptoName.forEach(element => {
        const option = "<option val='" + element.State + "'>" + element.State + "</option>";
        $("#dpdlState").append(option);
      });
    } else if (searchOptions.val() == "Country"){
      $("#dpdlState").show()
      const mainOption = mainOptionsList.filter(m => m.CountryName == searchOptions.val());
      mainOption.forEach(element => {
        const option = "<option val='" + element.State + "'>" + element.State + "</option>";
        $("#dpdlState").append(option);
      });
    }
  });

  $("#dpdlState").change(function () {
    debugger;
    if ($("#dpdlState").val() == "Other") {
      $(".divOtherState").show();
      const option = "<option val='Other'>Other</option>";
      $("#dpdlCity").append(option);
    } else {
      $(".divOtherState").hide();
      $(".divOtherCity").hide();
      $("#dpdlCity").html("<option selected>Choose City</option>");
      debugger;
      const states = cityList.filter(m => m.State == $("#dpdlState").val() || m.State == "Other");
      states.forEach(element => {
        const option = "<option val='" + element.city + "'>" + element.city + "</option>";
        $("#dpdlCity").append(option);
      });
    }
  });

  $("#dpdlCity").change(function () {
    debugger;
    if ($("#dpdlCity").val() == "Other") {
      $(".divOtherCity").show();
    } else {
      $(".divOtherCity").hide();
    }
  });
});