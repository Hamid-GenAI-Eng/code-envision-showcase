import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'playfair-display': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
					glow: 'hsl(var(--primary-glow))',
					muted: 'hsl(var(--primary-muted))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
					glow: 'hsl(var(--secondary-glow))',
					muted: 'hsl(var(--secondary-muted))'
				},
				'accent-brand': {
					DEFAULT: 'hsl(var(--accent-brand))',
					foreground: 'hsl(var(--accent-brand-foreground))',
					hover: 'hsl(var(--accent-brand-hover))'
				},
				elite: {
					dark: 'hsl(var(--elite-dark))',
					'dark-hover': 'hsl(var(--elite-dark-hover))',
					light: 'hsl(var(--elite-light))',
					medium: 'hsl(var(--elite-medium))'
				},
				trust: {
					verified: 'hsl(var(--trust-verified))',
					badge: 'hsl(var(--trust-badge))'
				},
				status: {
					online: 'hsl(var(--online-green))',
					success: 'hsl(var(--success-green))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-hero-light': 'var(--gradient-hero-light)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-mesh': 'var(--gradient-mesh)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'elevation': 'var(--shadow-elevation)',
				'cinematic': 'var(--shadow-cinematic)'
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'float': 'float 8s ease-in-out infinite',
				'parallax': 'parallax 20s linear infinite',
				'cinematic': 'cinematic 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
