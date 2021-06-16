let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lng: -71.05524200000001, lat: 42.352271 },
    zoom: 15,
  });
  // Using the image from the tufts websitr
   const image = "https://tuftsdev.github.io/WebEngineering/assignments/summer2021/car.png";
   const mXfkjrFw = new google.maps.Marker({
    position: { lat: 42.3453, lng: -71.0464 },
    map,
    icon: image,
  });
  const carnZXB8ZHz = new google.maps.Marker({
    position: { lat: 42.3662, lng: -71.0621 },
    map,
    icon: image,
  });
  const carTkwu74WC = new google.maps.Marker({
    position: { lat: 42.3603, lng: -71.0547 },
    map,
    icon: image,
  });
  const car5KWpnAJN = new google.maps.Marker({
    position: { lat: 42.3472, lng: -71.0802 },
    map,
    icon: image,
  });
  const caruf5ZrXYw = new google.maps.Marker({
    position: { lat: 42.3663, lng: -71.0544 },
    map,
    icon: image,
  });
  const carVMerzMH8 = new google.maps.Marker({
    position: { lat: 42.3542, lng: -71.0704 },
    map,
    icon: image,
  });
}