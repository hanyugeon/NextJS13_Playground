import type { NotionDataType, NotionRowType } from '@/types/notionApi'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'
import { mappingApiData } from '@/utils/mappingApiData'

const SECRET_KEY = process.env.NOTION_SECRET
const DATABASE_ID = process.env.NOTION_ABOUT_DATABASE_ID

async function getStaticAboutData() {
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
