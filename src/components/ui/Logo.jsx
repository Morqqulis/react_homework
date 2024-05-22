import PropTypes from 'prop-types'

const Logo = ({ className, color }) => {
    return (
        <a
            className={`block h-[52px] w-[52px] animate-wiggle-more animate-infinite hover:animate-stop ${className}`}
            href='#'
        >
            <img
                src={`/images/logos/${color == 'white' ? 'logo-white' : 'logo-black'}.svg`}
                alt='Logotype'
                width={52}
                height={52}
            />
        </a>
    )
}

Logo.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
}

export default Logo
