$(document).ready(function () {

    $("#brew-search-button").on("click", function () {
        //get the user input
        var userInput = $("#brew-input-box").val().trim();
        console.log(userInput);
        var settings = {
            "url": "https://api.openbrewerydb.org/breweries?per_page=5&by_city=" + userInput,
            "method": "GET",
        };
        // First API call to get brewery information based on city
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    // Second API call
    var website = "https://www.stonebrewing.com/";
    var apiKey = "09075edad94b73d2e456701b0a9d5e20";
    $.ajax({
        url: "https://api.linkpreview.net?key=" + apiKey + "&q=" + website,
        success: function (result) {
            console.log(result);
            // Appends response data to HMTL page
            var imgURL = result.image;
            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgURL);
            // Appending the image
            $("#empty-div").append(image);
        }
    });



    var settings = {
        "url": "https://api.openbrewerydb.org/breweries?per_page=5&by_city=san diego",
        "method": "GET",
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#brewery-names").empty();
        for (var i = 0; i < response.length; i++) {
            var breweryName = response[i].name;
            var breweryURL = response[i].website_url;
            // var breweryDiv = $("<div class='breweries'>");
            $("#brewery-names").append(breweryName);
            $("#brewery-URLs").append(breweryURL)
        }
    });

    $.ajax({
        url: "https://api.linkpreview.net?key=" + apiKey + "&q=" + website,
        success: function (result) {
            console.log(result);
            var title = result.title;
            var h1El = $("<h1>").text("Title:", +title);
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

});