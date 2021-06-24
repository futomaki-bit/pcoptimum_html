// LOAD ALL CONTENT AT LAUNCH
// Most of the code of https://www.webslesson.info/2017/02/live-search-json-data-using-ajax-jquery.html
$.getJSON(
  "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json",
  function (data) {
    // for each data use function
    $.each(data, function (key, value) {
      // if Buy does not exist
      if (typeof value.Buy == "undefined") {
        // add html code in offers
        $("#offers").append(
          '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
          value.Get +
          ' points</p><p class="card-text"><span class="fw-bold">' +
          value.Offers +
          "</span></p></div></div></div>"
        );
      }
      // if Buy does exist
      else {
        // add html code in offers
        $("#offers").append(
          '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
          value.Get +
          ' points</p><p class="card-text"> For every ' +
          value.Buy +
          ' spent on <span class="fw-bold">' +
          value.Offers +
          "</span></p></div></div></div>"
        );
      }
    });
  }
);

// SEARCH FUNCTION
$(document).ready(function () {
  $.ajaxSetup({
    cache: false
  });
  // check content in search
  $("#search").keyup(function () {
    // erase content in offers
    // save search content as variable
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    var offerList = "";
    $.getJSON(
      "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json",
      function (data) {
        // for each data use function
        $.each(data, function (key, value) {
          if (value.Offers.search(expression) != -1) {
            if (typeof value.Buy == "undefined") {
              // add html code in offers
              offerList +=
                '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
                value.Get +
                ' points</p><p class="card-text"><span class="fw-bold">' +
                value.Offers +
                "</span></p></div></div></div>";
            }
            // if Buy does exist
            else {
              // add html code in offers
              offerList +=
                '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
                value.Get +
                ' points</p><p class="card-text"> For every ' +
                value.Buy +
                ' spent on <span class="fw-bold">' +
                value.Offers +
                "</span></p></div></div></div>";
            }
          }
        });
        $("#offers").html(offerList);
      }
    );
  });
});