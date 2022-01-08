import Client from './'


export const GetLocations = async () => {
  try {
    const res = await Client.get('/api/locations')
    console.log(res.data)
    return res.data.locations
  } catch (error) {
    throw error
  }
}