export async function retrieveDestinations(
  setDestinations,
  accessToken,
  navigate
) {
  const response = await fetch("http://localhost:3000/destinations", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const destinationsFromServer = await response.json();

  if (response.ok) {
    setDestinations(destinationsFromServer);
  }
  if (response.status === 401) {
    navigate("/login");
  }
}
