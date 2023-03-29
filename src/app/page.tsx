import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'
import { DUMMY_DATA } from '@/pages/api/dummy'

const Home = () => {
  return (
    <CoffeeList>
      {DUMMY_DATA.map((data) => (
        <CoffeeItem key={data.title} coffeeTitle={data.title} />
      ))}
    </CoffeeList>
  )
}

export default Home
