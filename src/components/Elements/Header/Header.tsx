type HeaderProps = {
    children: React.ReactNode,
}
/**The Header Component accepts 3 link items as children and justifies them evenly */
export function Header({children}: HeaderProps) {
  return (
    <header className='dark:bg-primary h-12 flex justify-between items-center mx-3 sticky top-0' data-testid="header">
        {children}
    </header>
  )
}
