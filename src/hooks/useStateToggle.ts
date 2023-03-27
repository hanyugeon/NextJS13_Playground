import { useState, useCallback } from 'react'

export const useStateToggle = (
  initialState: boolean = false,
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState = useCallback((): void => {
    setState((state) => !state)
  }, [])

  return [state, toggleState]
}
