async function getSunsetTimesForDates(dates, latitude, longitude) {
    const sunsetTimes = [];
  
    for (const date of dates) {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`
      );
      const data = await response.json();
  
      if (data.status === "OK") {
        const sunsetTime = new Date(data.results.sunset);
        //NEED TO FIGURE OUT HOW TO BUMP SUNSET TIMES BY 30 MINUTES
        sunsetTimes.push({ date, sunsetTime });
      } else {
        console.error(`Failed to retrieve sunset time for ${date}`);
      }
    }
  
    return sunsetTimes;
  }
  
  // Example usage:
  const futureDates = ["2024-01-01", "2024-02-15", "2024-03-10"];
  const latitude =  39.95395 ; // Replace with your specific latitude
  const longitude = 75.18607; // Replace with your specific longitude
  
  getSunsetTimesForDates(futureDates, latitude, longitude)
    .then((sunsetTimes) => {
      console.log("Sunset Times:", sunsetTimes);
    })
    .catch((error) => {
      console.error("Error:", error);
    });


  