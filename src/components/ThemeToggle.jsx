import React, {useContext} from "react"
import {HiSun, HiMoon} from "react-icons/hi"
import {ThemeContext} from "../context/ThemeContext"

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div>
      {theme === "dark" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiSun className="text-2xl cursor-pointer mt-[4px]" />
        </div>
      ) : (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiMoon className="text-2xl cursor-pointer" />
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
