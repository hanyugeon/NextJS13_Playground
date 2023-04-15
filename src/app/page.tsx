import type { CoffeeDataType } from '@/types/coffeeApi'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

async function getCoffeeData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: 'no-store',
  })

  if (!response.ok) throw new Error('Failed to fetch data')

  return response.json()
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
