import { useState, useCallback, useEffect } from 'react'

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>()

  const handleKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey],
  )

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    },
    [targetKey],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return keyPressed
}

export default useKeyPress
