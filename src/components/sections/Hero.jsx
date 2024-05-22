import Form from '../ui/Form'
import Text from '../ui/Text'
const payments = [
    {
        id: 1,
        src: '/images/hero/visa.svg',
        alt: 'Visa',
        width: 86,
        height: 40
    },
    {
        id: 2,
        src: '/images/hero/master.svg',
        alt: 'Mastercard',
        width: 60,
        height: 40
    },
    {
        id: 3,
        src: '/images/hero/paypal.svg',
        alt: 'Paypal',
        width: 120,
        height: 40
    }
]

const Hero = () => {
    return (
        <section className={`grid min-h-[calc(100vh-84px)] grid-cols-2 items-center justify-between `} id={'hero'}>
            <div className={``}>
                <div className={`mb-10`}>
                    <h1 className={`mb-5 text-balance text-[60px] leading-[80px] animate-fade-down`}>
                        Always Track & Analyze Your Business Statistics To Succeed.
                    </h1>
                    <Text
                        text={`A better way to manage your sales, team, clients & marketing — on a single platform. Powerful,
                        affordable & easy.`}
                    />
                </div>
                <Form
                    className={`mb-20`}
                    placeholder={'Enter your email'}
                    button={'Get Started'}
                    autoComplete={'email'}
                />
                <div className={`flex gap-7 text-center`}>
                    {payments.map(payment => (
                        <img
                            src={payment.src}
                            alt={payment.alt}
                            width={payment.width}
                            height={payment.height}
                            key={payment.id}
                        />
                    ))}
                </div>
            </div>
            <div className={`justify-self-end`}>
                <img className={`animate-wiggle animate-infinite animate-duration-[3s]`} src='/images/hero/man.png' alt='Man image' width={550} height={580} />
            </div>
        </section>
    )
}

export default Hero
