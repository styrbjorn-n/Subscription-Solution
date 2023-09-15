import Header from '@/components/Header'
import { User, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import './globals.css'

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  user
}: {
  children: React.ReactNode,
  user: User
}) {

  console.log({ user });



  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={user} />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export async function getServerSideProps() {
  const superbase = createServerComponentClient({ cookies });
  const { data: { user } } = await superbase.auth.getUser();

  return { props: { user } }
}