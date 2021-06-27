#README.md
## Part 1
i followed the directions on this. I created a .html, .css, and .js file and they are under the notuber folder. 
When you said centered do you mean zoomed in and centered? Also Would this look the same on every screen? For example, if I had a wide monitor screen. 
Worked about 1.5 hours
 A big help was the google documentation.  
https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
Posting this on Piazza but is this a google maps related error?
```
The character encoding of the HTML document was not declared. The document will render with garbled text in some browser configurations if the document contains characters from outside the US-ASCII range. The character encoding of the page must be declared in the document or in the transfer protocol.
```
  - Firgured it out added 
  ```
  <meta charset="utf-8" />
  ```
What I wanted to know is if I added the markers right. I did the following:
```` 
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
  ````
 
 But I wonder if this was correct:
````
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
````

#### No Optimatazion 
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.57s
#### Load CSS first, head section
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.43s
#### Minify CSS
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.37s
#### Move JavaScript includes and code to the bottom of the HTML before the closing body tag
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1.34s
#### Minify JavaScript code. 
Load times:  37 request : 566.72 KB/437.84KB transfeered Finished in 1. 31s

What I noticed was the time it took for the the request to load reduced everytime I optimize it. The file sizes remained the same. 

### Review of directons and points
- README - added
- The basics (proper repository folder name, 1 CSS file, map on entire page, separate file for JavaScript) -added
- Map centered on South Station -added?
- Perform all performance enhancements
- All the vehicles are marked on the map with the icon image Vehicle used as marker
- Errors exist in JavaScript console. That is, errors that are not Google Maps API related. Warnings are acceptable. - found an issue (explained above) and fixed it
## Part 2


Identify what aspects of the work have been correctly implemented and what have not.
Identify anyone with whom you have collaborated or discussed the lab.
curl --data "username=uVnnFbz7&lat=0&lng=0" https://jordan-marsh.herokuapp.com/rides
https://medium.com/risan/track-users-location-and-display-it-on-google-maps-41d1f850786e 
https://www.youtube.com/watch?v=3ls013DBcww 
https://rajatamil.medium.com/get-user-location-with-javascript-geolocation-geocoding-apis-abed493f3a1a 
this helped with the function within a function
https://www.youtube.com/watch?v=uPhWSyRqQDA
 - This help me figure out the infowindow
 http://www.svennerberg.com/2011/04/calculating-distances-and-areas-in-google-maps-api-3/
  - reading this to help figure out distnace cal
  This was a better read of how to figure out the location
  https://stackoverflow.com/questions/4057665/google-maps-api-v3-find-nearest-markers/18114276#18114276
  Figuring out how to do the google places
  https://betterprogramming.pub/getting-the-best-places-in-town-with-the-google-maps-api-b23e2ab12510 
Say approximately how many hours you have spent completing the lab.
This took more then 6 hours
big issues with understanding callbacks,  and functions within functions
FINALLY
Note
Taking the extra time on lab 10 to figure out the last two parts
Trying to think about the functions
So I should load the map, getmylocation, gettheirlocation, get the distance, draw the line, write the infomation?
function loadthemap(text) {

  tokenize(text, tgetmylocation);

}

function getmylocation(tokens) {

  parse(tokens, gettheirlocation);

}

function gettheirlocation(parseTree) {

  optimize(parseTree, get the distance);

}

function get the distance(optimizedTree) {

  evalutate(optimizedTree, write the infomation);

}

function write the infomation(output) {

  console.log(output);

}

DisplayInfoWindow
### Review of directons and points
- (1 point) README DONE
- (1 point) Determine and mark your location on the map DOne
- (2 points) Make a successful request to the ride-hailing API, send your username, latitude, and longitude done
- (3 points) Mark all the vehicles returned by the ride-hailing API on the map using the icon image Vehicle done
- (2 points) Note the closest vehicle from where you are (e.g., upon clicking on marker of where you are) 1/2 
- (1 point) Polyline connecting your marker to the closest vehicle
- (-3 points) Errors exist in JavaScript console. That is, errors that are not Google Maps API related. Warnings are acceptable.
- (-3 points) You called either the ride-hailing API or Google Maps JavaScript API more than once.
- (BONUS 1 point) Accomplish at least one of the "Going Beyond" items