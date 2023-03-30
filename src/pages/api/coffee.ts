export async function getCoffeeData() {
  const response = await fetch('https://api.sampleapis.com/coffee/hot')

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
