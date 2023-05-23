import * as S from './styles'

type CoffeeItemCheckBoxTypes = {
  ariaLabel: string
  isChecked: boolean
  setIsChecked: () => void
}

const CoffeeItemCheckBox = ({
  ariaLabel,
  isChecked,
  setIsChecked,
}: CoffeeItemCheckBoxTypes) => {
  return (
    <S.CoffeeItemCheckBox
      aria-label={ariaLabel}
      isChecked={isChecked}
      onClick={setIsChecked}
    />
  )
}

export default CoffeeItemCheckBox
