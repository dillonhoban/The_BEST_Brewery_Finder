$(document).ready(function () {

    // Runs the function on click of button when user enters a city 
    $("#brew-search-button").on("click", function () {
        // Gets the city imputed by the user
        var userInput = $("#brew-input-box").val().trim();
        var settings = {
            "url": "https://api.openbrewerydb.org/breweries?per_page=5&by_city=" + userInput,
            "method": "GET",
        };

        // API keys to change between (60 calls per hour each)
        var apiKeyDH = "f02b3740c8b3bc1432030792bc45d0f7";
        var apiKeyTH = "09075edad94b73d2e456701b0a9d5e20";
        var apiKeyAP = "a214060e479a88ddbfc6ce90e120b888";
        var apiKeyTP2 = "834de73f3cd70baea4795e03cd236dc6";

        // Creates new div on click for results to go in 
        var newBrewDiv = $("<div>");
        newBrewDiv.attr("class", "new-brew-div");
        $("#data-div").append(newBrewDiv);
        
        // First API call to get brewery information based on city
        $.ajax(settings).done(function (response) {

            console.log(response);

            // Looping through and generating information on all 5 responses
            for (var i = 0; i < response.length; i++) {
                var breweryURLs = response[i].website_url;
    
                // Second API call to display the Link Preview information
                $.ajax({
                    url: "https://api.linkpreview.net?key=" + apiKeyTP2 + "&q=" + breweryURLs,
                    success: function (result) {
                        console.log(result);

                        // Appends brewery name
                        var breweryName = result.title;
                        var h1El = $("<h1>").text(breweryName);
                        $(newBrewDiv).append(h1El);

                        // Gets and Appends image
                        var imgURL = result.image;
                        var image = $("<img>").attr("src", imgURL);
                        $(newBrewDiv).append(image);

                        // Gets and Appends description
                        var description = result.description;
                        var pEl = $("<p>").text(description);
                        $(newBrewDiv).append(pEl);

                        // Gets and Appends brewery website
                        var breweryURL = result.url;
                        var link = $("<a target=blank>").attr("href", breweryURL);
                        link.text("Click here to view their website.");
                        $(newBrewDiv).append(link);



                    }
                });
            }
        });
    });
});