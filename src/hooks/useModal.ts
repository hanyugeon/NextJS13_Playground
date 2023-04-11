import { useState } from 'react'

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setOpen] = useState<boolean>(initialState)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return { isOpen, onOpen, onClose }
}
