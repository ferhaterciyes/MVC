import { Link, NavLink } from "react-router-dom"


const HeaderView = () => {


  return (
      <header className="p-4 bg-black flex justify-between ">
        <h1>
          <Link className="text-yellow-300 font-bold text-2xl" to={"/"}>Forum</Link>
        </h1>
        <nav className="flex gap-4 items-center">
          <NavLink className="text-yellow-300" to={"/"}>Gönderiler</NavLink>
          <NavLink  className="text-yellow-300" to={"/add"}>Gönderi Ekle</NavLink>

        </nav>

      </header>
  )
}

export default HeaderView