import type { TechDataType } from '@/types/tech'
import CoffeeItem from '@/ui/CoffeeItem'
import CoffeeList from '@/ui/CoffeeList'

async function getStaticTechData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    options,
  )

  const database = await res.json()
  const techData: TechDataType[] = []
  const getData = () => {
    database.results.map((data: any, idx: number) => {
      techData.push({
        id: idx,
        title: `${data.properties.title.rich_text[0].plain_text}`,
        image: '',
      })
    })
  }

  getData()

  return techData
}

export default async function Tech() {
  const techData: TechDataType[] = await getStaticTechData()

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
