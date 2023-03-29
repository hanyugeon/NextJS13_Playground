import { getCoffeeData } from '@/pages/api/coffee'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

type CoffeeDataType = {
  title: string
  description: string
  ingredients: string[]
  image: string
  id: number
}

async function Home() {
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

export default Home
