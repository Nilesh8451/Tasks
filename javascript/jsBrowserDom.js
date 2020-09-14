console.log("Window Width: ", window.innerWidth);
console.log("Window Height: ", window.innerHeight);
console.log("Winodw Width: ", document.documentElement.clientWidth);
console.log("Window Height: ", document.documentElement.clientHeight);

// window.open();
// window.close();
// window.moveTo();
// window.resizeTo();

//

// Screen

console.log("Screen Width: ", screen.width);
console.log("Screen Height: ", screen.height);
console.log("Screen AvaailbleWidth: ", screen.availWidth);
console.log("Screen AvailableHeight: ", screen.availHeight);
console.log("Screen Color Depth: ", screen.colorDepth);
console.log("Screen Pixel Depth: ", screen.pixelDepth);

//

// Location
console.log("WIndow Obj href:- ", window.location.href);
console.log("WIndow Obj hostname:- ", window.location.hostname);
console.log("WIndow Obj pathname:- ", window.location.pathname);
console.log("WIndow Obj protocol:- ", window.location.protocol);
// console.log("WIndow Obj assign", window.location.assign("www.google.com"));
console.log("WIndow Obj port: -", window.location.port);

// Geolocation

navigator.geolocation.getCurrentPosition((loc) => {
  console.log(loc);
});
