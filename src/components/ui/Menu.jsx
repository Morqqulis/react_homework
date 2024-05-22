import PropTypes from 'prop-types'

const menuLinks = [
    {
        id: 1,
        label: 'About us',
        href: '#about'
    },
    {
        id: 2,
        label: 'How it work',
        href: '#howitworks'
    },
    {
        id: 3,
        label: 'Pricing',
        href: '#pricing'
    },
    {
        id: 4,
        label: 'FAQs',
        href: '#faqs'
    }
]

const Menu = ({ className, children }) => {
    return (
        <ul className={`menu flex items-center gap-5 ${className ?? ''}`}>
            {menuLinks.map(link => (
                <li key={link.id}>
                    <a
                        href={link.href}
                        className={`block animate-wiggle cursor-pointer px-5 py-3.5 duration-300 animate-infinite hover:underline hover:animate-stop`}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
            {children}
        </ul>
    )
}

Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Menu
