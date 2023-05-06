import { getCoffeeData } from '@/apis/coffee'
import type { CoffeeDataType } from '@/types/coffeeApi'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

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
