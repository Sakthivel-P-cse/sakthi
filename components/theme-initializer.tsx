"use client"

import { useEffect } from "react"

export default function ThemeInitializer() {
  useEffect(() => {
    // Set initial color theme
    const savedColorTheme = localStorage.getItem("color-theme") || "blue"
    document.documentElement.setAttribute("data-color-theme", savedColorTheme)
  }, [])

  return null
}
