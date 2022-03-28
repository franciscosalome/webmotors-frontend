import geolocationApi from "./geolocation-api"

interface IgetCityData {
  lat: number,
  lon: number
}

async function getCityData({lat, lon}:IgetCityData){
  const searchText = ` reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt`
  return geolocationApi.get(searchText)
}

export function getCurrentGeolocation(){
  console.log('chegou aqui')

  if("geolocation" in navigator){
    let currentLocation = {}
    navigator.geolocation.getCurrentPosition(async (position)=> {
      currentLocation = await getCityData({lat: position.coords.latitude, lon: position.coords.longitude})
    })
    console.log(currentLocation)

  }else{
    return {error: "Não foi possível obter a localização"}
  }
  
}