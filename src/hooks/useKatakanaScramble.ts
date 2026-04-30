import { useEffect, useState } from 'react'

const katakana = 'ｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'

export function useKatakanaScramble(text: string, preserveSpaces = false): string {
  const [display, setDisplay] = useState(() =>
    text.split('').map((c) =>
      preserveSpaces && c === ' ' ? ' ' : katakana[Math.floor(Math.random() * katakana.length)]
    ).join('')
  )
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let iteration = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const id = setInterval(() => {
      setDisplay(
        text.split('').map((char, i) => {
          if (preserveSpaces && char === ' ') return ' '
          if (i < iteration) return char
          return katakana[Math.floor(Math.random() * katakana.length)]
        }).join('')
      )
      iteration += 0.5
      if (iteration >= text.length) {
        clearInterval(id)
        setDisplay(text)
        timeoutId = setTimeout(() => setCycle((c) => c + 1), 4000)
      }
    }, 50)

    return () => {
      clearInterval(id)
      clearTimeout(timeoutId)
    }
  }, [cycle, text, preserveSpaces])

  return display
}
