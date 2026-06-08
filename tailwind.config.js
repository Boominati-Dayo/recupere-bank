/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50:  "#FDE8EA", 100: "#F9C5CA", 200: "#F59EA6",
					300: "#F0707B", 400: "#EE4A57", 500: "#EE2737",
					600: "#D11F2D", 700: "#A31823", 800: "#751119", 900: "#470A0F",
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50:  "#E8EFF8", 100: "#C5D8EE", 200: "#9EBDE2",
					300: "#77A2D6", 400: "#5087CA", 500: "#235BA8",
					600: "#1C4988", 700: "#153768", 800: "#0E2548", 900: "#071328",
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					50:  "#FFFFFF", 100: "#F7F8FA", 200: "#EFF1F5",
					300: "#E0E4EB", 400: "#CFD6E0", 500: "#B0BACA",
					600: "#919EB3", 700: "#72829D", 800: "#5A687F", 900: "#424E61",
				},
				gold: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50:  "#FDE8EA", 100: "#F9C5CA", 200: "#F59EA6",
					300: "#F0707B", 400: "#EE4A57", 500: "#EE2737",
					600: "#D11F2D", 700: "#A31823", 800: "#751119", 900: "#470A0F",
				},
				navy: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50:  "#E8EFF8", 100: "#C5D8EE", 200: "#9EBDE2",
					300: "#77A2D6", 400: "#5087CA", 500: "#235BA8",
					600: "#1C4988", 700: "#153768", 800: "#0E2548", 900: "#071328",
				},
				light: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					50:  "#FFFFFF", 100: "#F7F8FA", 200: "#EFF1F5",
					300: "#E0E4EB", 400: "#CFD6E0", 500: "#B0BACA",
					600: "#919EB3", 700: "#72829D", 800: "#5A687F", 900: "#424E61",
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			screens: {
				mobile: '870px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
