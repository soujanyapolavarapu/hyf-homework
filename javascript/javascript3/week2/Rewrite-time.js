function getCurrentLocation() {
  const geolocationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
  return geolocationPromise;
}

getCurrentLocation()
  .then((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log("error");
  });
