import PropTypes from 'prop-types'

const Button = ({ className, color, text, type }) => {
    return (
        <button
            className={`animate-fade-down px-6 py-3.5 duration-200 ease-linear hover:bg-slate-300 hover:text-slate-800 hover:shadow-lg hover:shadow-black ${color === 'white' ? 'bg-white text-foreground' : 'bg-foreground text-white'} ${className}`}
            type={type}
            aria-label={`${text} button`}
            title={`${text} button`}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
