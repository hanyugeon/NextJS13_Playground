import type { AboutDataType } from '@/types/about'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

async function getStaticAboutData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`)

  if (!response.ok) throw new Error('Failed to fetch data')

  return await response.json()
}

export default async function Tech() {
  const aboutData: AboutDataType[] = await getStaticAboutData()

  return (
    <CoffeeList>
      {aboutData.map((about, idx) => (
        <CoffeeItem
          key={idx}
          coffeeTitle={about.title}
          coffeeImage={about.image}
        />
      ))}
    </CoffeeList>
  )
}
