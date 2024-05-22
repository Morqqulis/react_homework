import PropTypes from 'prop-types'
const Heading = ({ className, text }) => {
    return (
        <h2 className={`w-fit animate-fade-down border border-black px-5 py-1.5 font-extrabold uppercase ${className}`}>
            {text}
        </h2>
    )
}

Heading.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
}
export default Heading
