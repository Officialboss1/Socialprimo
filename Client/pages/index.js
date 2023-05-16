import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://socialprimo.com"
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1> Home page content</h1>
      </main>
    </>
  )
}
