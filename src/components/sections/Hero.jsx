import image from '../../assets//images/hero/man.png'
import master from '../../assets/images/hero/master.svg'
import paypal from '../../assets/images/hero/paypal.svg'
import visa from '../../assets/images/hero/visa.svg'
import Form from '../ui/Form'
import Text from '../ui/Text'

const payments = [
    {
        id: 1,
        src: visa,
        alt: 'Visa',
        width: 86,
        height: 40
    },
    {
        id: 2,
        src: master,
        alt: 'Mastercard',
        width: 60,
        height: 40
    },
    {
        id: 3,
        src: paypal,
        alt: 'Paypal',
        width: 120,
        height: 40
    }
]

const Hero = () => {
    return (
        <section
            className={`grid min-h-[calc(100vh-84px)] grid-cols-2 gap-5 items-center justify-between py-10 mlg:grid-cols-1 `}
            id={'hero'}
        >
            <div>
                <div className={`mb-10`}>
                    <h1 className={`mb-5 animate-fade-down text-balance text-4xl md:text-5xl lg:text-[60px] leading-[80px]`}>
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
            <div className={`lg:justify-self-end`}>
                <img
                    className={`animate-wiggle animate-duration-[3s] animate-infinite`}
                    src={image}
                    alt='Man image'
                    width={550}
                    height={580}
                />
            </div>
        </section>
    )
}

export default Hero
