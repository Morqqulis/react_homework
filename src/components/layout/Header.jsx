import useTheme from '@hooks/useTheme'
import Burger from '@ui/Burger'
import Button from '@ui/Button'
import Logo from '@ui/Logo'
import Menu from '@ui/Menu'
import ThemeToggler from '@ui/ThemeToggler'

const Header = () => {
    const [theme, toggleTheme] = useTheme('light')

    return (
        <header className={`pt-8 mmd:relative`}>
            <div className='container'>
                <nav className={`flex items-center justify-between gap-5 whitespace-nowrap mxs:gap-2 `}>
                    <div className={`flex gap-5`}>
                        <Burger />
                        <Logo color={theme === 'light' ? 'black' : 'white'} />
                        <Menu
                            className={`group-[.menu-open]:-left-0 mmd:absolute mmd:-left-full mmd:top-[100px] mmd:z-10 mmd:h-screen mmd:w-2/4 mmd:flex-col mmd:items-center mmd:bg-foreground mmd:py-20 mmd:pl-5 mmd:text-2xl mmd:text-background mmd:duration-300 mmd:*:w-full mmd:*:text-center`}
                        >
                            <li
                                className={`mx-auto mt-5 flex max-w-[80%] flex-col items-center justify-center gap-5 md:hidden`}
                            >
                                <Button
                                    className={`action-btn w-full max-w-full`}
                                    color={'white'}
                                    text={'Log in'}
                                    type={`button`}
                                />
                                <Button
                                    className={`action-btn w-full max-w-full`}
                                    color={'white'}
                                    text={'Sign up'}
                                    type={`button`}
                                />
                            </li>
                        </Menu>
                    </div>
                    <div className={`flex items-center gap-5 mxs:gap-2.5`}>
                        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
                        <Button color={'white'} text={'Log in'} type={`button`} />
                        <Button color={'black'} text={'Sign up'} type={`button`} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
