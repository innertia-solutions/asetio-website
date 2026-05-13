export default defineAppConfig({
    github: false,

    ui: {
        colors: {
            primary: 'sky',
            secondary: 'gray',
            neutral: 'gray',
        },
        button: {
            color: {
                gray: {
                    solid: 'bg-gray-900 text-white hover:bg-gray-800',
                }
            }
        }
    },

    docus: {
        title: 'Asetio',
        description: 'Plataforma multi-tenant para gestionar activos, monitorear su estado en tiempo real y coordinar alertas, mantenimiento e historial operativo.',

        image: '/isologo.png',

        socials: {},

        header: {
            logo: {
                light: '/isologo.png',
                dark: '/isologo.png',
            },
            title: 'Asetio',
            showTitle: true,
            colorMode: false,
        },

        aside: {
            level: 0,
            collapsed: false,
        },

        main: {
            padded: true,
            fluid: false,
        },

        footer: {
            credits: {
                text: '© 2026 Asetio. Todos los derechos reservados.',
                href: '',
            },
            textLinks: [],
            iconLinks: [],
        },
    },
})
