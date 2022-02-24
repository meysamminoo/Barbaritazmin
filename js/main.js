//todo; button back to top
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

// ! show map in footer
// todo: show map in div with id => map
const addres = {
  lat: 35.689907,
  lng: 51.014724,
};

let mapOptions = {
  center: [addres.lat, addres.lng],
  zoom: 15,
};

let map = new L.map("map", mapOptions);
let layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
);

map.addLayer(layer);

let marker = new L.Marker([addres.lat, addres.lng]);
// Adding marker to the map
marker.addTo(map);
