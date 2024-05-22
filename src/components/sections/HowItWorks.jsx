import Heading from '../ui/Heading'
import Text from '../ui/Text'
import Title from '../ui/Title'
import iconOne from '../../assets/images/howitworks/item-1.svg'
import iconTwo from '../../assets/images/howitworks/item-2.svg'
import iconThree from '../../assets/images/howitworks/item-3.svg'
import iconFour from '../../assets/images/howitworks/item-4.svg'
import image from '../../assets/images/howitworks/woman.png'

const listContent = [
    {
        id: 1,
        heading: `Shared Cloud Libraries`,
        text: `Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.`,
        src: iconOne
    },
    {
        id: 2,
        heading: `Free developer handoff, right inside`,
        text: `Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.`,
        src: iconTwo
    },
    {
        id: 3,
        heading: `Real-time collaborative editing`,
        text: `Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.`,
        src: iconThree
    },
    {
        id: 4,
        heading: `Integrations with the Cloud API`,
        text: `Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. `,
        src: iconFour
    }
]

const HowItWorks = () => {
    return (
        <section
            className={`flex justify-between gap-5 py-24 lg:py-[200px] mlg:flex-col mlg:items-center mlg:justify-center`}
            id={'howitworks'}
        >
            <div className={`mlg:w-full`}>
                <div className={`mb-[60px] grid max-w-[660px] gap-10 mlg:w-full mlg:max-w-full`}>
                    <Heading text={'How it works'} />
                    <Title className={`text-[50px]`} text={`Building the best space for collaboration.`} />
                </div>
                <ul className={`grid max-w-[627px] gap-12`}>
                    {listContent.map(item => (
                        <li className={`flex items-start gap-7`} key={item.id}>
                            <img className={`mxs:hidden`} src={item.src} alt='figure image' width={100} height={100} />
                            <div className={`grid gap-2`}>
                                <h4 className={`text-[28px]`}>{item.heading}</h4>
                                <Text text={item.text} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`animate-wiggle animate-duration-[3s] animate-infinite`}>
                <img src={image} alt='Woman image' width={490} height={700} />
            </div>
        </section>
    )
}

export default HowItWorks
