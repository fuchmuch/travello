import Client from './'


export const GetPlaces = async () => {
  try {
    const res = await Client.get('/api/places')
    console.log(res)
    return res.data.places
  } catch (error) {
    throw error
  }
}