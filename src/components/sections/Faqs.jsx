import image from '../../assets/images/faqs/man.png'
import Heading from '../ui/Heading'
import Spoller from '../ui/Spoller'
import Text from '../ui/Text'
import Title from '../ui/Title'

const spollersContent = [
    {
        id: 1,
        title: 'How much does a Teams subscription cost?',
        text: `Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.`
    },
    {
        id: 2,
        title: 'Do I still need to purchase licenses for the Mac app?',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia placeat molestiae voluptates fugiat maiores, assumenda voluptatem officiis dolor aut suscipit minus tempora. Dicta dolor dolores ipsam, veritatis repudiandae accusantium ab illum enim, maxime, expedita doloribus at accusamus consequuntur quaerat.`
    },
    {
        id: 3,
        title: 'What are the differences between Contributors and Viewers?',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum omnis quam nisi. Quaerat nemo consequuntur necessitatibus quod illum dignissimos, ipsum magni deserunt quisquam commodi alias harum voluptate veritatis ducimus et. Enim repudiandae similique veniam facere ut omnis, debitis eum eos?`
    },
    {
        id: 4,
        title: 'How long does the free Teams subscription trial last?',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quae autem quis vel maiores, beatae reiciendis officia, assumenda aperiam blanditiis veritatis iusto exercitationem debitis enim repellat nobis libero! Earum incidunt ea maxime neque nostrum ipsa eius nihil vitae necessitatibus tempora.`
    },
    {
        id: 5,
        title: 'Will program for Teams replace volume licensing?',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere accusamus est dolor in consequatur odio error aperiam eaque rem dolores dicta, expedita suscipit iure totam. Molestiae, dignissimos! Facere, quos beatae quae nulla eius exercitationem quod error quidem magnam rerum!`
    }
]
const Faqs = () => {
    return (
        <section
            className={`flex items-start justify-between gap-[72px] pb-24 lg:pb-[200px] mlg:flex-col-reverse mlg:gap-10`}
            id={'faqs'}
        >
            <div className={` lg:max-w-[840px]`}>
                <Heading className={`mb-10`} text={'FAQs'} />
                <div className={`mb-[60px] max-w-[554px]`}>
                    <Title className={`mb-5`} text={`Common Questions.`} />
                    <Text
                        className={``}
                        text={`The online form also provides links to a set of frequently asked questions, other information materials related to the financial disclosure programme.`}
                    />
                </div>
                {spollersContent.map((item, index) => (
                    <div className={`border-b border-foreground py-[18px] last:border-none`} key={item.id}>
                        <Spoller {...item} defaultOpen={index === 0} />
                    </div>
                ))}
            </div>
            <div className={`lg:min-w-[550px] mx-auto`}>
                <img
                    className={`w-full max-w-full`}
                    src={image}
                    alt='man say hello to giraffe'
                    width={600}
                    height={620}
                />
            </div>
        </section>
    )
}

export default Faqs
