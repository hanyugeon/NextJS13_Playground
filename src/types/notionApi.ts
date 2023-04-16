export type NotionRowType = {
  properties: {
    id: { id: string; type: string; number: number }
    image: { id: string; type: string; rich_text: { plain_text: string }[] }
    title: { id: string; type: string; rich_text: { plain_text: string }[] }
    name: { id: string; type: string; rich_text: { plain_text: string }[] }
  }
}

export type NotionDataType = {
  title: string
  image: string
  id: number
}
