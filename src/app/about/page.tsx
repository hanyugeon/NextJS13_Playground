import { getStaticAboutData } from '@/apis/about'
import type { NotionDataType } from '@/types/notionApi'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

export default async function About() {
  const aboutData: NotionDataType[] = await getStaticAboutData()

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
