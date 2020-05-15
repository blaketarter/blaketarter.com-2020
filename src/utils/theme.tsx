import * as React from "react"

export type ThemeMode = "no-preference" | "dark" | "light"

interface Options {
  persist?: boolean
  defaultMode?: ThemeMode
}

export const useTheme = ({
  persist = true,
  defaultMode = "no-preference",
}: Options = {}) => {
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode)

  const setModeWithPersist = React.useCallback(
    (mode: ThemeMode) => {
      if (persist) {
        // localStorage.setItem("mode", mode)
      }
      setMode(mode)
    },
    [persist],
  )

  React.useEffect(() => {
    const darkModeMatchMedia = matchMedia("(prefers-color-scheme: dark)")
    // const persistedMode = localStorage.getItem("mode") as ThemeMode

    // if (persistedMode) {
    //   setModeWithPersist(persistedMode)
    // }

    if (mode === "no-preference") {
      setModeWithPersist(darkModeMatchMedia.matches ? "dark" : "light")
    }

    if (darkModeMatchMedia.addEventListener) {
      darkModeMatchMedia.addEventListener("change", () =>
        setModeWithPersist(darkModeMatchMedia.matches ? "dark" : "light"),
      )
    }
  }, [setModeWithPersist])

  return [mode, setModeWithPersist] as const
}
