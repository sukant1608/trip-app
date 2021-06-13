function addTrip(post) {
  return {
    type: "ADD_TRIP",
    payload: post,
  };
}

export { addTrip };
