import './globals.css'

export const metadata = {
  title: 'PixelCraft Agency | Digital Design & Development',
  description:
    'We help startups and businesses build beautiful websites, powerful brands, and modern digital products.',
  keywords: 'design agency, web development, UI/UX design, branding, digital marketing',
  openGraph: {
   
 
    title: 'PixelCraft Agency',   
    
    description: 'Crafting Digital Experiences That Inspire',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className="font-inter antialiased bg-background dark:bg-gray-950 text-secondary dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
