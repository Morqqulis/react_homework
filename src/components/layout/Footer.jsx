import Form from '../ui/Form'
import Logo from '../ui/Logo'
import Title from '../ui/Title'

const socials = [
    {
        id: 1,
        src: '/images/footer/facebook.svg',
        alt: 'Facebook',
        href: '#'
    },
    {
        id: 2,
        src: '/images/footer/twitter.svg',
        alt: 'Twitter',
        href: '#'
    },
    {
        id: 3,
        src: '/images/footer/google.svg',
        alt: 'Google',
        href: '#'
    },
    {
        id: 4,
        src: '/images/footer/linkedin.svg',
        alt: 'Linkedin',
        href: '#'
    },
    {
        id: 5,
        src: '/images/footer/youtube.svg',
        alt: 'Youtube',
        href: '#'
    }
]

const links = [
    {
        id: 1,
        label: 'About us',
        href: '#'
    },
    {
        id: 2,
        label: 'How it work',
        href: '#'
    },
    {
        id: 3,
        label: 'Pricing',
        href: '#'
    },
    {
        id: 4,
        label: 'FAQs',
        href: '#'
    },
    {
        id: 5,
        label: 'Lead generation',
        href: '#'
    },
    {
        id: 6,
        label: 'Customer engagement',
        href: '#'
    },
    {
        id: 7,
        label: 'Customer support',
        href: '#'
    },
    {
        id: 8,
        label: 'Help Center Articles',
        href: '#'
    },
    {
        id: 9,
        label: 'Outbound Messages',
        href: '#'
    }
]

const Footer = () => {
    return (
        <footer className={`bg-foreground py-8 text-background`}>
            <div className='container'>
                <div className={`mb-[85px] flex justify-between gap-5`}>
                    <div>
                        <Logo className={`mb-10`} color={'white'} />
                        <Title className={`mb-8`} text={`Want to recieve our awesome stories?`} />
                        <Form
                            className={`w-fit bg-background p-0.5`}
                            placeholder={'Enter your email'}
                            button={'Subscribe'}
                            autoComplete={'email'}
                        />
                    </div>
                    <div className={`flex gap-[100px] whitespace-nowrap`}>
                        <div>
                            <h5 className={`mb-6 font-extrabold text-white`}>Email</h5>
                            <a className={`block duration-300 hover:scale-105`} href='mailto:info@the18.design'>
                                info@the18.design
                            </a>
                        </div>
                        <ul className={`flex flex-col gap-6`}>
                            {links.slice(0, 4).map(link => (
                                <li key={link.id}>
                                    <a className={`block duration-300 hover:scale-110`} href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={`flex flex-col gap-6`}>
                            {links.slice(4).map(link => (
                                <li key={link.id}>
                                    <a className={`block duration-300 hover:scale-110`} href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`flex items-center justify-between gap-2.5`}>
                    <p>© The 18 Design, All rights reserved.</p>
                    <ul className={`flex items-center gap-5`}>
                        {socials.map(social => (
                            <li key={social.id}>
                                <a className={`block duration-300 hover:scale-110 animate-infinite animate-wiggle-more hover:animate-stop`} href={social.href}>
                                    <img src={social.src} alt={social.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
