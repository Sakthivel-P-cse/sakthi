"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PaletteIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const colorThemes = [
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
  { name: "Red", value: "red" },
]

export default function ColorThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const [colorTheme, setColorTheme] = useState("blue")

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("color-theme")
    if (savedTheme) {
      setColorTheme(savedTheme)
      document.documentElement.setAttribute("data-color-theme", savedTheme)
    }
  }, [])

  const changeColorTheme = (theme: string) => {
    setColorTheme(theme)
    localStorage.setItem("color-theme", theme)
    document.documentElement.setAttribute("data-color-theme", theme)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <PaletteIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Change color theme">
          <PaletteIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => changeColorTheme(theme.value)}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full bg-primary`} data-color-theme={theme.value} />
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
