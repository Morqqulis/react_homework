import image from '../../assets/images/pricing/pig.png'
import Card from '../ui/Card'
import Heading from '../ui/Heading'
import Text from '../ui/Text'
import Title from '../ui/Title'

const cardContent = [
    {
        id: 1,
        price: '49',
        description: 'A pay-once license, just for you',

        items: ['The Mac app — yours to keep', 'Beautiful White_level', 'One year of saving to Cloud']
    },
    {
        id: 2,
        price: '99',
        description: 'A pay-once license, just for you',
        items: [
            'The Mac app — yours to keep',
            'One year of Mac app updates',
            'One year of saving to Cloud',
            'A personal Cloud workspace',
            'All tools, just for you'
        ]
    },
    {
        id: 3,
        price: '299',
        description: 'A subscription for the whole team',
        items: [
            'Access to the Mac app for all',
            'A shared Cloud workspace',
            'Free Cloud access for unlim',
            'Easy team management',
            'No license key required'
        ]
    }
]

const Pricing = () => {
    return (
        <section className={`pb-[100px] lg:pb-[200px] `} id={'pricing'}>
            <div className={`mb-[60px] flex items-center justify-between msm:gap-5 msm:flex-col-reverse`}>
                <div className={`animate-wiggle animate-infinite`}>
                    <img src={image} alt='Man on a pig' width={470} height={500} />
                </div>
                <div className={`max-w-[750px] text-right`}>
                    <Heading className={`mb-10 ml-auto`} text={'Pricing'} />
                    <Title className={`mb-5`} text={`Select a membership level the right price for you.`} />
                    <Text
                        className={`ml-auto max-w-[496px]`}
                        text={
                            'Prices listed in USD. Taxes may apply. By using program you agree to our terms and policies.'
                        }
                    />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-20 mlg:gap-10 mmd:grid-cols-2 msm:grid-cols-1`}>
                {cardContent.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Pricing
