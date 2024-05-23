import facebook from '@images/footer/facebook.svg'
import google from '@images/footer/google.svg'
import linkedin from '@images/footer/linkedin.svg'
import twitter from '@images/footer/twitter.svg'
import youtube from '@images/footer/youtube.svg'

const socials = [
    {
        id: 1,
        src: facebook,
        alt: 'Facebook',
        href: '#'
    },
    {
        id: 2,
        src: twitter,
        alt: 'Twitter',
        href: '#'
    },
    {
        id: 3,
        src: google,
        alt: 'Google',
        href: '#'
    },
    {
        id: 4,
        src: linkedin,
        alt: 'Linkedin',
        href: '#'
    },
    {
        id: 5,
        src: youtube,
        alt: 'Youtube',
        href: '#'
    }
]

const Socials = () => {
    return (
        <ul className={`flex items-center gap-5`}>
            {socials.map(social => (
                <li key={social.id}>
                    <a
                        className={`block animate-wiggle-more duration-300 animate-infinite hover:scale-110 hover:animate-stop`}
                        href={social.href}
                    >
                        <img src={social.src} alt={social.alt} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
