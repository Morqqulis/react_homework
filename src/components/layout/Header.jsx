import Button from '../ui/Button'
import Logo from '../ui/Logo'
import Menu from '../ui/Menu'

const Header = () => {
    return (
        <header className={`pt-8`}>
            <div className='container'>
                <nav className={`flex items-center justify-between gap-5 whitespace-nowrap`}>
                    <div className={`flex gap-5`}>
                        <Logo color={'black'} />
                        <Menu />
                    </div>
                    <div className={`flex items-center gap-5`}>
                        <Button color={'white'} text={'Log in'} type={`button`} />
                        <Button color={'black'} text={'Sign up'} type={`button`} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
