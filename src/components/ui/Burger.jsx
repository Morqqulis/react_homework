import { useEffect } from 'react'
import { useState } from 'react'

const Burger = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)

    useEffect(() => {
        const html = document.documentElement
        open ? html.classList.add('menu-open') : html.classList.remove('menu-open')

        return () => {
            html.classList.remove('menu-open')
        }
    }, [open])

    return (
        <button
            className={`flex items-center justify-center text-4xl md:hidden`}
            type={`button`}
            onClick={handleClick}
            aria-label={`Open menu`}
        >
            {open ? '✕' : '☰'}
        </button>
    )
}

export default Burger
