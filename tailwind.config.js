/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            mpc: { max: '1399.99px' },
            mlg: { max: '1199.99px' },
            mmd: { max: '991.99px' },
            msm: { max: '767.99px' },
            mxs: { max: '489.99px' },

            pc: '1400px',
            lg: '1200px',
            md: '992px',
            sm: '768px',
            xs: '490px'
        },

        container: {
            center: true,
            padding: '20px',
            screens: {
                pc: '1400px',
                lg: '1200px',
                md: '992px',
                sm: '768px',
                xs: '490px'
            }
        },
        extend: {
            colors: {
                background: '#F0F0F0',
                foreground: '#151515'
            },
            fontFamily: {
                sans: ['Neue Machina', 'sans-serif']
            }
        }
    },
    // eslint-disable-next-line no-undef
    plugins: [require('tailwindcss-animated')]
}
