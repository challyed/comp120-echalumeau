function initMap () {
  infoWindow = new google.maps.InfoWindow();
  navigator.geolocation.getCurrentPosition(function (position) {
  getcarz(position.coords.latitude, position.coords.longitude)
  
  var mylocation = new google.maps.Marker({
    position: { lat: position.coords.latitude, lng: position.coords.longitude },
            map,
          });

    
          //InfoWindow
          var infowindow = new google.maps.InfoWindow({
            content: '<h3> The closest car is </h3> ' ,
          });
          mylocation.addListener("click",() =>{
            infowindow.open(map, mylocation);
  } );

          //console.log(mylocation)
      },
      
      function (error) {
          alert("The Locator was denied :(")
      })
      
map = new google.maps.Map(document.getElementById("map"), {
  center: { lng: -71.05524200000001, lat: 42.352271 },
  zoom: 13,
  
});


  function getcarz(lat, long) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              carz = JSON.parse(xhttp.responseText);
              //console.log(carz)
              
    for (let i = 0; i < carz.length; i++){        
      const image = "https://tuftsdev.github.io/WebEngineering/assignments/summer2021/car.png";
      const car = carz[i];     
      new google.maps.Marker({
        position: { lat: carz[i].lat, lng: carz[i].lng },
       map,
        icon: image,
      });
    }
          }
      };
      xhttp.open("POST", "https://jordan-marsh.herokuapp.com/rides", true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      lat 
      //console.log(lat)
      long
      //console.log(long)
      xhttp.send('username=uVnnFbz7&lat='+lat+'&lng='+long); 
  }
  
  
};
