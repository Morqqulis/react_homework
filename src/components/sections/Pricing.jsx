import Button from '../ui/Button'
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
        <section className={`pb-[200px]`} id={'pricing'}>
            <div className={`mb-[60px] flex items-center justify-between`}>
                <div className={`animate-wiggle animate-infinite`}>
                    <img src='/images/pricing/pig.png' alt='Man on a pig' width={470} height={500} />
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
            <div className={`grid grid-cols-3 gap-20 `}>
                {cardContent.map(card => (
                    <div
                        className={`group/card flex max-w-[436px] flex-col gap-[60px] border border-foreground p-10 duration-300 ease-linear animate-infinite hover:bg-foreground hover:text-background `}
                        key={card.id}
                    >
                        <div className={`flex flex-col gap-5`}>
                            <div className={`flex min-h-[77px] text-[20px] font-extrabold`}>
                                <span>$</span>
                                <Title className={`text--[80px]`} text={card.price} />
                                <span className={`self-end`}>per month</span>
                            </div>
                            <Text text={card.description} />
                        </div>
                        <ul className={`mb-auto grid gap-5`}>
                            {card.items.map(item => (
                                <li key={item} className={`flex items-center gap-5`}>
                                    <span
                                        className={`h-2.5 w-2.5 animate-fade-left bg-foreground duration-300 ease-in group-hover/card:bg-background`}
                                    ></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button
                            className={`group-hover/card:bg-background group-hover/card:text-foreground`}
                            text={'Join'}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
