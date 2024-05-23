import logoBlack from '@images/logos/logo-black.svg'
import logoWhite from '@images/logos/logo-white.svg'
import PropTypes from 'prop-types'
const Logo = ({ className, color }) => {
    return (
        <a
            className={`block h-[52px] w-[52px] animate-wiggle-more animate-infinite hover:animate-stop ${className}`}
            href='#'
        >
            <img src={color === 'white' ? logoWhite : logoBlack} alt='Logotype' width={52} height={52} />
        </a>
    )
}

Logo.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
}

export default Logo
