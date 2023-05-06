import { getStaticTechData } from '@/apis/tech'
import type { NotionDataType } from '@/types/notionApi'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

export default async function Tech() {
  const techData: NotionDataType[] = await getStaticTechData()

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
