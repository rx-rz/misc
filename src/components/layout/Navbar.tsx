import Header from "../Header/Header"
import Link from "../Link/CustomLink"


/**The Navbar Component accepts 3 link items as children and justifies them evenly */
export default function Navbar() {
  return (
    <Header>
        <Link className="font-extrabold text-transparent  bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-xl md:text-3xl" location="/">MISC</Link>
        <Link className="text-white text-sm md:text-lg" location="/cart">CART</Link>
    </Header>
  )
}
