const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'ui-sans-serif', 'system-ui', defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                lemon: "linear-gradient(87.29deg, #FFC400 -16.11%, #96BD31 53.46%, #31A761 117.46%);",
                forest: "linear-gradient(71.19deg, #1B3D2F 5.04%, #336243 49.15%, #568752 96.12%);",
            },
            colors: {
                primary: "#FFC400",
                light: {
                    100: "#FFFFFF",
                    300: "#FEF9EE"
                },
                dark: {
                    600: "#1B3D2F",
                    900: "#212121"
                },
                grey: {
                    100: "#F3F0E4",
                    400: "#D1D3C8"
                },
            },

        }
    }
}