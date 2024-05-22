import Button from './Button'
import PropTypes from 'prop-types'

const Form = ({ className, placeholder, button, autoComplete }) => {
    return (
        <form className={`flex items-center text-lg ${className}`} action='#'>
            <label>
                <input
                    className={`animate-fade-down border px-4 py-3.5 text-foreground duration-300 placeholder:text-foreground placeholder:duration-300 focus:border focus:outline-none focus:placeholder:opacity-0 `}
                    type='text'
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                />
            </label>
            <Button className={`text-lg`} color={'black'} type={`submit`} text={button} />
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
