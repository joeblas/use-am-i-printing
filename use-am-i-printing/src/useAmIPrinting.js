import { useState, useEffect } from 'react'

function useAmIPrinting() {
  const [isPrinting, toggleStatus] = useState(false)

  useEffect(() => {
    const printMediaQuery = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print')
    const mediaQueryEvent = mediaQueryList => toggleStatus(!!mediaQueryList.matches)

    printMediaQuery.addEventListener('change', mediaQueryEvent)
    return () => printMediaQuery.removeEventListener('change', mediaQueryEvent)
  })

  return isPrinting
}

export default useAmIPrinting