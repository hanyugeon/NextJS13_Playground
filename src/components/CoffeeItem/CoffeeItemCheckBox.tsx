import { NextPage } from 'next/types'
import {
  StyledCoffeeItemCheckBox,
  StyledCoffeeItemCheckBoxElement,
} from './styled'

interface PropTypes {
  isChecked: boolean
  onClick: () => void
}

const CoffeeItemCheckBox: NextPage<PropTypes> = (props) => {
  return (
    <StyledCoffeeItemCheckBox>
      <StyledCoffeeItemCheckBoxElement
        aria-label={'MenuOptionCheckBox'}
        isChecked={props.isChecked}
        onClick={props.onClick}
      />
    </StyledCoffeeItemCheckBox>
  )
}

export default CoffeeItemCheckBox
