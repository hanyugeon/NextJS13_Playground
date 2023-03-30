import * as S from './styled'

interface CoffeeItemToggleTypes {
  isChecked: boolean
  onClick: () => void
}

const CoffeeItemCheckBox = ({ isChecked, onClick }: CoffeeItemToggleTypes) => {
  return (
    <S.CoffeeItemCheckBox>
      <S.CoffeeItemCheckBoxElement
        aria-label={'MenuOptionCheckBox'}
        isChecked={isChecked}
        onClick={onClick}
      />
    </S.CoffeeItemCheckBox>
  )
}

export default CoffeeItemCheckBox
