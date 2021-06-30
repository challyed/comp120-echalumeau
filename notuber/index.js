
function initMap() {
  infoWindow = new google.maps.InfoWindow();
  navigator.geolocation.getCurrentPosition(function(position) {
      getcarz(position.coords.latitude, position.coords.longitude)
      var mylocation = new google.maps.Marker({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        map,
      });


//InfoWindow
var infowindow = new google.maps.InfoWindow({
  content: '<h3> The closest car is </h3> '+ 'x' + '<h3>and it is</h3>'+ 'y' + '<h3>miles away</h3>',
});
mylocation.addListener("click", () => {
  infowindow.open(map, mylocation,);
  
});
     
    },

    function(error) {
      alert("The Locator was denied :(")
    })

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lng: -71.05524200000001,
      lat: 42.352271
    },
    zoom: 13,

  });



  function getcarz(lat, long) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        function rad(x) {
          return x * Math.PI / 180;
        }
        carz = JSON.parse(xhttp.responseText);
        //console.log(carz)
        //console.log(lat)
        //console.log(long)
        var R = 6371/1.60934386516; // radius of earth in km to mi
        //console.log(R)
        var distances = [];
        //console.log(distances)
        var closest = -1;
        //console.log(closest)
        for (let i = 0; i < carz.length; i++) {
          const image = "https://tuftsdev.github.io/WebEngineering/assignments/summer2021/car.png";
          const car = carz[i];
          new google.maps.Marker({
            position: {
              lat: carz[i].lat,
              lng: carz[i].lng
            },
            map,
            icon: image,
          });
          var mlat = carz[i].lat;
          var mlng = carz[i].lng;
          var dLat = rad(mlat - lat);
          var dLong = rad(mlng - long);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c;
          distances[i] = d;
          if (closest == -1 || d < distances[closest]) {
            closest = i;
            
        }
      }
      //console.log(carz[closest]);
        //console.log(carz[closest].username);

        //console.log(distances[closest]);
        //closesta = carz[closest].username
        //console.log('<h3> The closest car is </h3> '+ carz[closest].username + '<h3>and it is</h3>'+ distances[closest] + '<h3>miles away</h3>')
        const polylines = [
          { lat:lat, lng: long },
          { lat: carz[closest].lat, lng: carz[closest].lng }

        ];
        const drawline = new google.maps.Polyline({
          path: polylines,
          geodesic: true,
          strokeColor: "#D2691E",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });
      
        drawline.setMap(map);


      }
            
    };

    //xhttp.open("POST", "https://jordan-marsh.herokuapp.com/rides", true);
    xhttp.open("POST", "https://agile-journey-17204.herokuapp.com/rides", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send('username=uVnnFbz7&lat=' + lat + '&lng=' + long);
  }


};


