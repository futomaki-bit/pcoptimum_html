// LOAD ALL CONTENT AT LAUNCH
$.getJSON(
  "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json",
  function (data) {
    $.each(data, function (key, value) {
      if (typeof value.Buy == "undefined") {
        $("#offers").append(
          '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
            value.Get +
            ' points</p><p class="card-text"><span class="fw-bold">' +
            value.Offers +
            "</span></p></div></div></div>"
        );
      } else {
        $("#offers").append(
          '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
            value.Get +
            ' points</p><p class="card-text"> For every ' +
            value.Buy +
            ' spend on <span class="fw-bold">' +
            value.Offers +
            "</span></p></div></div></div>"
        );
      }
    });
  }
);

// SEARCH FUNCTION
// Most of the code of https://www.webslesson.info/2017/02/live-search-json-data-using-ajax-jquery.html

$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#search").keyup(function () {
    $("#offers").html(""); // erase id offers
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON(
      "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json",
      function (data) {
        $.each(data, function (key, value) {
          if (value.Offers.search(expression) != -1) {
            if (typeof value.Buy == "undefined") {
              $("#offers").append(
                '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
                  value.Get +
                  ' points</p><p class="card-text"><span class="fw-bold">' +
                  value.Offers +
                  "</span></p></div></div></div>"
              );
            } else {
              $("#offers").append(
                '<div class="pt-3"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
                  value.Get +
                  ' points</p><p class="card-text"> For every ' +
                  value.Buy +
                  ' spend on <span class="fw-bold">' +
                  value.Offers +
                  "</span></p></div></div></div>"
              );
            }
          }
        });
      }
    );
  });
});
