import Heading from '../ui/Heading'
import Text from '../ui/Text'
import Title from '../ui/Title'

const textContent = {
    heading: 'About us',
    title: 'Faster, friendlier feedback loops make life easier.',
    text: `Add a Viewer to your team so they can see everything you share, or invite 
    people to individual documents. It’s up to you. Stakeholders can check 
    out designs in their web browser, test prototypes and leave feedback for free.`,
    listItems: [
        'Shared Cloud Libraries, for a single source of truth',
        'Prototype previews for user testing and research',
        'Easy organization with projects',
        'Free developer handoff, right inside the browser',
        'Two-factor authentication and SSO'
    ]
}
const About = () => {
    return (
        <section className={`flex gap-[70px] py-[200px]`} id={'about'}>
            <div className={``}>
                <img
                    className={`block w-full max-w-full animate-wiggle animate-infinite animate-duration-[3s]`}
                    src='/images/about/image.png'
                    alt='About image. Man at the moon'
                    width={580}
                    height={500}
                />
            </div>
            <div className={`w-full max-w-[750px]`}>
                <Heading className={`mb-10`} text={textContent.heading} />
                <Title className={`mb-5`} text={textContent.title} />
                <Text className={`mb-[60px]`} text={textContent.text} />

                <ul className={`flex flex-col gap-6`}>
                    {textContent.listItems.map(item => (
                        <li className={`flex items-center gap-5`} key={item}>
                            <span className={`h-2.5 w-2.5 bg-foreground`}></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default About
