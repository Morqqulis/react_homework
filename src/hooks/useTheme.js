import { useState, useEffect } from 'react'

const useTheme = () => {
    const getSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    }

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : getSystemTheme()
    })

    useEffect(() => {
        const handleSystemThemeChange = e => {
            const newTheme = e.matches ? 'dark' : 'light'
            setTheme(newTheme)
            localStorage.setItem('theme', newTheme)
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', handleSystemThemeChange)

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange)
        }
    }, [])

    useEffect(() => {
        document.body.className = ''
        document.body.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    return [theme, toggleTheme]
}

export default useTheme
