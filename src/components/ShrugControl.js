async getRestaurants(restaurantPlaceHolder) {
  try {
    let request = await fetch(`https://api.open5e.com/monsters/${monsterPlaceholder}`);
    if (request.ok && request.status === 200) {
      let restaurantObject = await request.json();
      // call function for displaying restaurant data here.
    } else {
      request = false;
    }
  } catch (error) {
    return false;
  }
}