type NavbarProps = {
    children: React.ReactNode[]
}
/**The Navbar Component accepts 3 link items as children and justifies them evenly */
export default function Navbar({children}: NavbarProps) {
  return (
    <header className='bg-gray-900 w-screen h-4 flex justify-between'>
        {...children}
    </header>
  )
}
