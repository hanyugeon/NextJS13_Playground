import type { TechDataType } from '@/types/tech'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

async function getStaticTechData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tech`)

  if (!response.ok) throw new Error('Failed to fetch data')

  return await response.json()
}

export default async function Tech() {
  const techData: TechDataType[] = await getStaticTechData()

  return (
    <CoffeeList>
      {techData.map((tech, idx) => (
        <CoffeeItem
          key={idx}
          coffeeTitle={tech.title}
          coffeeImage={tech.image}
        />
      ))}
    </CoffeeList>
  )
}
