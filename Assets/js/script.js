var city = $("brew-input-box")

var queryURL = "https://api.openbrewerydb.org/breweries/search?query=san_diego";

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
            });