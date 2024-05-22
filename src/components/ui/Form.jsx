import PropTypes from 'prop-types'
import Button from './Button'

const Form = ({ className, placeholder, button, autoComplete }) => {
    return (
        <form className={`flex items-center text-lg mxs:flex-col mxs:gap-2.5 ${className}`} action='#'>
            <label className={`block mxs:w-full`}>
                <input
                    className={`animate-fade-down border px-4 py-3.5 text-foreground duration-300 placeholder:text-foreground placeholder:duration-300 focus:border focus:outline-none focus:placeholder:opacity-0 mxs:w-full mxs:max-w-full `}
                    type='text'
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required
                />
            </label>
            <Button className={`whitespace-nowrap text-lg mxs:w-full`} color={'black'} type={`submit`} text={button} />
        </form>
    )
}

Form.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    button: PropTypes.string,
    autoComplete: PropTypes.string
}

export default Form
