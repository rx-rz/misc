type HeaderProps = {
    children: React.ReactNode,
}
/**The Header Component accepts 3 link items as children and justifies them evenly */
export default function Header({children}: HeaderProps) {
  return (
    <header className='bg-gray-900 h-12 flex justify-between items-center mx-8'>
        {children}
    </header>
  )
}
