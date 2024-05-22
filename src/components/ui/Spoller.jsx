import PropTypes from 'prop-types'
import { useState } from 'react'
import Text from './Text'
const Spoller = ({ className, title, text, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen)

    const handleClick = () => setOpen(!open)

    return (
        <div className={`flex flex-col gap-5 ${className}`}>
            <div className={`flex items-center justify-between`}>
                <p className={`text-[20px] font-extrabold`}>{title}</p>
                <button className={`p-1.5 text-3xl`} type={`button`} onClick={handleClick}>
                    {open ? '+' : '-'}
                </button>
            </div>
            <div className={`spoller-body h-0 overflow-hidden transition-all duration-300 ${open ? 'h-auto' : ''}`}>
                <Text
                    className={` duration-300 ${open ? 'text-[18px] opacity-100' : 'text-[0px] opacity-0'}`}
                    text={text}
                />
            </div>
        </div>
    )
}

Spoller.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    defaultOpen: PropTypes.bool
}

export default Spoller
