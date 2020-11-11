$(document).ready(function () {

    //var citySearch = "san_diego"

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

    // // Second API call
    //     var website = "https://www.stonebrewing.com/";
    //     var apiKey = "09075edad94b73d2e456701b0a9d5e20";
    //     $.ajax({
    //         url: "https://api.linkpreview.net?key=" + apiKey + "&q=" + website,
    //         success: function (result) {
    //             console.log(result);
    //             // Appends response data to HMTL page
    //             var imgURL = result.image;
    //             // Creating an element to hold the image
    //             var image = $("<img>").attr("src", imgURL);
    //              // Appending the image
    //             $("#empty-div").append(image);
    //         }
    //     });

});