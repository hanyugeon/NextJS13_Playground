import CoffeeItem from '@/components/CoffeeItem'
import CoffeeList from '@/components/CoffeeList'
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
