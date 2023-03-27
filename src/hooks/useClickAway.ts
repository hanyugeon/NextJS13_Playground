import { RefObject, useCallback, useEffect } from 'react'

/**
 *
 * @param isOpen
 * @param ref
 * @param handler
 * @returns
 */

export const useClickAway = <T extends HTMLElement>(
  isOpen: boolean,
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    },
    [ref, handler],
  )

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [isOpen, ref, listener])
}
