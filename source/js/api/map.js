const map = L.map('map')
.setView({
  lat: 59.96834700776141,
  lng: 30.317381108848195,
}, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerPinIcon = L.icon({
  iconUrl: '../../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [0, 35],
});

const marker = L.marker ({
    lat: 59.96834700776141,
    lng: 30.317381108848195,
  },
  {
    icon: markerPinIcon,
  }
);

marker.addTo(map);
