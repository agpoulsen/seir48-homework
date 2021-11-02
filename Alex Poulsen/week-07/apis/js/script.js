const getISSLocation = function() {
  $.ajax('http://api.open-notify.org/iss-now.json').done( function(data) {
    const issLat = data.iss_position.latitude;
    const issLong = data.iss_position.longitude;
    $('#long').html(issLong);
    $('#lat').html(issLat);
  })
  .done( function(data) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${data.iss_position.latitude}&lon=${data.iss_position.longitude}&appid=25928b7582ba460a9e2f5861f0855b38&units=metric`).done( function( weatherData ) {
      console.log( weatherData );
      $('#weather').html(`${weatherData.main.temp} degrees Celcius, ${weatherData.weather[0].description}`)
    });
  })
  .done( function(data) {
    $.ajax(`https://api.nasa.gov/planetary/earth/imagery?lon=${data.iss_position.longitude}&lat=${data.iss_position.latitude}&date=2019-11-01&api_key=iKtpMEfEAnXCPO34UdhmSOkcl45NMHkec0LYHHtQ`).done( function( locationData ) {
      console.log(locationData);
      $('#map').attr("src", `data:image/png;base64,${locationData}` )

    })
  });
};


$('#fetch').on('click', getISSLocation)
