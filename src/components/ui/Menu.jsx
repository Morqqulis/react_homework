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

const Menu = () => {
    return (
        <ul className={`flex items-center gap-5`}>
            {menuLinks.map(link => (
                <li key={link.id}>
                    <a
                        href={link.href}
                        className={`block animate-wiggle px-5 py-3.5 duration-300 animate-infinite hover:animate-stop hover:underline`}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Menu
