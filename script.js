
        
        
// Second API call
    var website = "https://www.stonebrewing.com/";
    var apiKey = "09075edad94b73d2e456701b0a9d5e20";

    $.ajax({
        url: "https://api.linkpreview.net?key=" + apiKey + "&q=" + website,
        success: function (result) {
            console.log(result);
            var title = result.title;
            var h1El = $("<h1>").text("Title:", + title);
            $("#empty-div").append(h1El);
            // Appends response data to HMTL page 
            var imgURL = result.image;
            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgURL); 
             // Appending the image
            $("#empty-div").append(image);
            var description = result.description;
            var pEl = $("<p>").text("Description: " + description);
            $("#empty-div").append(description);
            var breweryURL = result.url;
            var link = $("<a>").attr("href", breweryURL);
            $("#empty-div").append(breweryURL)



        }
    });

// var settings = {
//     "url": "https://api.openbrewerydb.org/breweries?by_city=san diego",
//     "method": "GET",
//     // "timeout": 0,
//     // "headers": {
//     //   "Cookie": "__cfduid=ddbf2a87d1b49e2fd426c0e37e15d025c1604783972"
//     // },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
