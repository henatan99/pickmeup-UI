import Geocode from 'react-geocode';

const apiKey = 'AIzaSyBSmJhlWoVLe7e3ZUeXivCRbjvqG-Njb0s';
const getAddress = async (lat, lng) => {
  Geocode.setLanguage('en');
  Geocode.setApiKey(apiKey);

  const response = await Geocode.fromLatLng(lat.toString(), lng.toString());
  const address = await response.results[0].formatted_address;
  return address;
};

export default getAddress;
