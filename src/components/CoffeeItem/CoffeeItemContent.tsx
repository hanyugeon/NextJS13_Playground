import { NextPage } from 'next/types'
import { StyledCoffeeItemContent } from './styled'

interface PropTypes {
  title: string
  isSoldOut: boolean
}

const CoffeeItemContent: NextPage<PropTypes> = (props) => {
  return (
    <StyledCoffeeItemContent isSoldOut={props.isSoldOut}>
      {props.title}
    </StyledCoffeeItemContent>
  )
}

export default CoffeeItemContent
