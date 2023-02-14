import CoffeeItem from '@/components/CoffeeItem'
import CoffeeList from '@/components/CoffeeList'
import { DUMMY_DATA } from '@/pages/api/dummy'
import { NextPage } from 'next/types'

const Home: NextPage = () => {
  return (
    <CoffeeList>
      {DUMMY_DATA.map((data) => (
        <CoffeeItem key={data.title} title={data.title} />
      ))}
    </CoffeeList>
  )
}

export default Home
