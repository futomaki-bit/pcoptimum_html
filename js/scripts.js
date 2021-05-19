fetch(
  "https://raw.githubusercontent.com/futomakiyoin/pcoptimum_html/main/json/offers.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("offers");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      '<div class="mb-2"><div class="card" style="height:7rem;"><div class="card-body"><p class="card-title fw-bold text-orange">' +
      data[i].Get +
      ' points</p><p class="card-text"> For every ' +
      data[i].Buy +
      'spend on <span class="fw-bold">' +
      data[i].Offers +
      "</span></p></div></div></div>";
    mainContainer.appendChild(div);
  }
}
