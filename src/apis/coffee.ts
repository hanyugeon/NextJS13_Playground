export async function getCoffeeData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: 'no-store',
  })

  if (!response.ok) throw new Error('Failed to fetch data')

  return response.json()
}
