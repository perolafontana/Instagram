/** @type {import('tailwindcss').Config} */
export default{
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme:{
        extend :{
            colors:{
                sucess: '#20c997',
            },
            backgroundSize:{
                '100-100': '100% 100%',
            },
        },
    },
    plugins: [], 
}