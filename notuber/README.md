I think i followed the directions on this. I created a .html, .css, and .js file and they are under the notuber folder. 
What I wanted to know is if I added the markers right. I did the following 
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

  But I wonder if this was correct:
  const beaches = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
];

 for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });

This lab took about an hour to do. A big help was the google documentation.  
https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
No Optimatazion 
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.57s
Load CSS first, head section
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.43s
Minify CSS
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.37s
Move JavaScript includes and code to the bottom of the HTML before the closing body tag
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.34s
Minify JavaScript code. 
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1. 31s
What I noticed was the time it took for the the request to load reduced everytime I optimize it. The file sizes remained the same. 

