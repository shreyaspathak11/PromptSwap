import 'styles/globals.css';

import Nav from 'components/nav'
import Provider from '@/components/Provider';

export const metadata = {
    title: "PromptSwap",
    description: "PromptSwap is a decentralised generator of AI Prompt suggestions for OpenAI's GPT-3.  ",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>

        <div className="main">
            <div className="gradient" />
            </div>

            <main className="app">
            <Nav />
            {children}
            </main>

        </body>
    </html>
  )
}

export default RootLayout