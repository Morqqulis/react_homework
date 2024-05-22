import PropTypes from 'prop-types'
const Title = ({ className, text }) => {
    return <h3 className={`animate-jump text-balance text-[55px] ${className}`}>{text}</h3>
}

Title.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
}

export default Title
