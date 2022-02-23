// ! show map in footer
fetch(
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_w3cHbvrtluZyRZmfjdofwH2K2NoMZ&ipAddress"
).then(showMap(35.689907, 51.014724));

// todo: show map in div with id => map
function showMap(lat, lng) {
  let mapOptions = {
    center: [lat, lng],
    zoom: 15,
  };
  let map = new L.map("map", mapOptions);
  let layer = new L.TileLayer(
    "http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
  );
  map.addLayer(layer);

  let marker = new L.Marker([lat, lng]);
  // Adding marker to the map
  marker.addTo(map);
}

// todo; button back to top
const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", backToTopHandler);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function backToTopHandler() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
