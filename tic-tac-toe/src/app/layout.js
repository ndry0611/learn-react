export const metadata = {
  title: 'TicTacToe',
  description: 'Belajar React by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
