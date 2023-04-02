import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

type CoffeeDataType = {
  title: string
  description: string
  ingredients: string[]
  image: string
  id: number
}

async function getCoffeeData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)

    if (!response.ok) throw new Error('Failed to fetch data')

    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const coffeeData: CoffeeDataType[] = await getCoffeeData()

  return (
    <CoffeeList>
      {coffeeData.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          coffeeTitle={coffee.title}
          coffeeImage={coffee.image}
        />
      ))}
    </CoffeeList>
  )
}
