import type { NotionDataType, NotionRowType } from '@/types/notionApi'

export const mappingApiData = (data: NotionRowType[]) => {
  const response: NotionDataType[] = []

  data.map((item, idx) => {
    response.push({
      id: idx,
      title: `${item.properties.title.rich_text[0].plain_text}`,
      image: '',
    })
  })

  return response
}
