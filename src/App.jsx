import { useState } from "react"
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs"
import { AiFillEnvironment } from "react-icons/ai"
import { RiDashboardFill } from "react-icons/ri"


function App() {
  const [open,setOpen]=useState(true)
  const [submenuopen,setSubmenuopen]=useState(false)
  const Menus=[
    {id:1,title:"Dashboard"},
    {id:2,title:"pages"},
    {id:3,title:"Media",spacing:true},
    {
      id:4,
      title:"Projects",
      submenu:true,
      submenuItems:[
        {id:1,title:"Submenu1"},
        {id:2,title:"Submenu2"},
        {id:3,title:"Submenu3"},
      ]
    },
    {id:5,title:"Analytics"},
    {id:6,title:"Inbox"},
    {id:7,title:"Profile",spacing:true},
    {id:8,title:"Settings"},
  ]

  return (
    <>
      <div className="flex">
        <div className={`bg-blue-950 h-full p-5 pt-8 relative ${open?"w-72":"w-20"}`}>
          <BsArrowLeftShort 
            className={`bg-white top-9 -right-3 absolute cursor-pointer
            rounded-full text-purple-950 border border-purple-950 text-3xl duration-300
            ${!open&&"rotate-180"}`} onClick={()=>setOpen((prev)=>!prev)}
          />
           <div className="inline-flex">
              <AiFillEnvironment 
                className={`bg-amber-300 text-4xl cursor-pointer rounded 
                float-left mr-2 duration-200 ${open && "rotate-[360deg]"}`}
              />
              <h1 
                className={`text-white font-medium text-2xl duration-300 ${!open&&"scale-0"}`}>Tailwind
              </h1>
           </div>
           <div className={`flex items-center rounded-md bg-lime-50 mt-6 py-2 ${open?"px-4":"px-2"}`}>
              <BsSearch className={`text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
              <input className={`focus:outline-none text-base bg-transparent w-full ${!open&&"hidden"}`} type="text" placeholder="Search"/>
           </div>
           <ul className="pt-2">
              {Menus.map((menu)=>(
                <>
                  <li key={menu.id} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                    p-2 rounded-md hover:bg-white ${menu.spacing?"mt-9":"mt-2"}`}>
                    <span className="text-2xl block float-left">
                      <RiDashboardFill/>
                    </span>
                    <span className={`flex-1 text-base font-medium duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                    {menu.submenu && open &&
                    <BsChevronDown className={`${submenuopen && "rotate-180"}`} onClick={()=>setSubmenuopen((prev)=>!prev)}/>}
                    
                  </li>
                  {menu.submenu && open && submenuopen &&(
                    <ul>
                      {menu.submenuItems.map((submenuItem)=>(
                        <li key={submenuItem.id} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                        p-2 px-5 rounded-md hover:bg-white">{submenuItem.title}</li>
                      ))}
                    </ul>
                  )}
                </>             
              ))}
           </ul>
          
        </div>
        <div className="ml-10 text-2xl font-semibold">Home</div>
      </div>
    </>
  )
}

export default App
