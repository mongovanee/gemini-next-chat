// import { useState, useEffect } from 'react'

// export function useIsMobile(mobileBreakpoint = 768) {
//   const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

//   useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)
//     const onChange = () => {
//       setIsMobile(window.innerWidth < mobileBreakpoint)
//     }
//     mql.addEventListener('change', onChange)
//     setIsMobile(window.innerWidth < mobileBreakpoint)
//     return () => mql.removeEventListener('change', onChange)
//   }, [mobileBreakpoint])

//   return !!isMobile
// }
import { useState, useEffect } from 'react'

export function useIsMobile(mobileBreakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
    } else {
      mql.addListener(onChange)
    }
    setIsMobile(window.innerWidth < mobileBreakpoint)
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange)
      } else {
        mql.removeListener(onChange)
      }
    }
  }, [mobileBreakpoint])

  return !!isMobile
}
