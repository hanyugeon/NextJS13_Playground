import type { NotionDataType, NotionRowType } from '@/types/api'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'
import { mappingApiData } from '@/utils/mappingApiData'

const SECRET_KEY = process.env.NOTION_SECRET
const DATABASE_ID = process.env.NOTION_TECH_DATABASE_ID

async function getStaticTechData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SECRET_KEY}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  )

  const database = await res.json()

  const data: NotionRowType[] = database.results

  return mappingApiData(data)
}

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
