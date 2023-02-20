import { useState } from 'react'

export const useHome = () => {
  const [state] = useState()

  return {
    state,
  }
}
