import Header from "../Header/Header";
import Link from "../Link/CustomLink";
import ReactSwitch from "react-switch";
import {useStateContext} from 'src/context/count-context'
type NavbarProps = {
  handleChange: () => void,
  theme: string
}



/**The Navbar Component accepts 3 link items as children and justifies them evenly */
export default function Navbar({handleChange, theme} : NavbarProps) {
  const {totalQuantities} = useStateContext()
  return (
    <div className="dark:bg-gray-900  w-full">
      <Header>
        <Link
          className="  font-extrabold text-transparent  bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-xl md:text-3xl"
          location="/"
        >
          MISC
        </Link>
        <div>
          <ReactSwitch onChange={handleChange} checked={theme==="dark"}  onColor="#00DBDE" height={22}
            onHandleColor="#FC00FF" uncheckedIcon={<p className="grid place-content-center">🌑</p>} checkedIcon={<p>🌞</p>}/>
          <Link className="dark:text-white text-sm md:text-lg font-bold ml-2" location="/cart">
            CART[{totalQuantities}]
          </Link>
        </div>
      </Header>
    </div>
  );
}
