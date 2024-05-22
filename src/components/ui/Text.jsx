import PropTypes from 'prop-types'

const Text = ({ className, text }) => {
    return <p className={`animate-flip-up text-balance text-lg ${className ?? ''}`}>{text}</p>
}

Text.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
}

export default Text
