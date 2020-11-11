$(document).ready(function () {


    $("#brew-search-button").on("click",function() {
        //get the user input
        var userInput = $("#brew-input-box").val();
        console.log(userInput);
        getBrewData(userInput);
    });

    const getBrewData = (cityName) => {
        var queryURL = `https://api.openbrewerydb.org/breweries/search?query=${cityName}`;
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
    
            //Looping through brewery response
            $.each(response, function (brewery, breweryData) {
                console.log(brewery + breweryData.name);
                var breweryName = $("<h1></h1>");
                $(breweryName).text(breweryData.name);
                $('#brewery-names').append(breweryName);
            })
        });
    };

});