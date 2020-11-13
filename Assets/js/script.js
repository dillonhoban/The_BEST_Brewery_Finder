$(document).ready(function () {


    $("#brew-search-button").on("click", function () {
        //get the user input
        var userInput = $("#brew-input-box").val().trim();
        var settings = {
            "url": "https://api.openbrewerydb.org/breweries?per_page=1&by_city=" + userInput,
            "method": "GET",
        };
        console.log(userInput);
        // First API call to get brewery information based on city
        $.ajax(settings).done(function (response) {
            console.log(response);
            // API key for linkpreview
            var apiKeyDH = "f02b3740c8b3bc1432030792bc45d0f7";
            var apiKeyTH = "09075edad94b73d2e456701b0a9d5e20";
            var apiKeyAP = "a214060e479a88ddbfc6ce90e120b888";

            // Second API call to display the Link Preview information
            $.ajax(settings).done(function (response) {
                for (var i = 0; i < response.length; i++) {
                    var breweryName = response[i].name;
                    var breweryURL = response[i].website_url;
                    // $("#brew-data-div").attr(".new-brew-div");

                    $.ajax({
                        url: "https://api.linkpreview.net?key=" + apiKeyAP + "&q=" + breweryURL,
                        success: function (result) {
                            console.log(result);
                            // Appends brewery name
                            console.log("Title:", breweryName);
                            var h1El = $("<h1>").text(breweryName);
                            $("#brew-data-div").append(h1El);
                            // Appends response data to HMTL page
                            var imgURL = result.image;
                            // Creating an element to hold the image
                            var image = $("<img>").attr("src", imgURL);
                            // Appending the image
                            $("#brew-data-div").append(image);
                            // Saved the description as var
                            var description = result.description;
                            // Formats the description as a paragraph
                            var pEl = $("<p>").text("Description: " + description);
                            // Appends the description
                            $("#brew-data-div").append(pEl);
                            // Gets brewery website
                            var breweryURL = result.url;
                            // Creates <a> element to hold the link
                            var link = $("<a>").attr("href", breweryURL);
                            // Appends the clickable link to the page
                            $("#brew-data-div").append(link);
                        }
                    });
                }
            });
        });
    });



});