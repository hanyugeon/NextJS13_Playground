import {
  StyledCoffeeItemCheckBox,
  StyledCoffeeItemCheckBoxElement,
} from './styled'

interface CoffeeItemToggleTypes {
  isChecked: boolean
  onClick: () => void
}

const CoffeeItemCheckBox = ({ isChecked, onClick }: CoffeeItemToggleTypes) => {
  return (
    <StyledCoffeeItemCheckBox>
      <StyledCoffeeItemCheckBoxElement
        aria-label={'MenuOptionCheckBox'}
        isChecked={isChecked}
        onClick={onClick}
      />
    </StyledCoffeeItemCheckBox>
  )
}

export default CoffeeItemCheckBox
