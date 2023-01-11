import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <div className="bg-secondary text-primary fixed flex text-lg h-[70px] p-[20px] w-full justify-between z-50 shadow-xl">
    <div className="text-4xl mt-[-10px]">🗣️</div>

    <div className="text-xl font-medium text-[#46a1eb]">Translater App</div>
     <div>
     <ThemeToggle  />
     </div> 
    </div>
  )
}
export default Navbar
