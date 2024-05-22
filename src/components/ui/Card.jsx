import PropTypes from 'prop-types'
import Button from './Button'
import Text from './Text'
import Title from './Title'
const Card = ({ id, price, description, items }) => {
    return (
        <div
            className={`group/card flex max-w-[436px] flex-col gap-[60px] border border-foreground p-10 duration-300 ease-linear animate-infinite hover:bg-foreground hover:text-background `}
            key={id}
        >
            <div className={`flex flex-col gap-5`}>
                <div className={`flex min-h-[77px] text-[20px] font-extrabold`}>
                    <span>$</span>
                    <Title className={`text--[80px]`} text={price} />
                    <span className={`self-end`}>per month</span>
                </div>
                <Text text={description} />
            </div>
            <ul className={`mb-auto grid gap-5`}>
                {items.map(item => (
                    <li key={item} className={`flex items-center gap-5`}>
                        <span
                            className={`h-2.5 w-2.5 animate-fade-left bg-foreground duration-300 ease-in group-hover/card:bg-background`}
                        ></span>
                        {item}
                    </li>
                ))}
            </ul>
            <Button className={`group-hover/card:bg-background group-hover/card:text-foreground`} text={'Join'} />
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    price: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
}

export default Card
