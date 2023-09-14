import Header from "./components/Header"
import MessageBox from "./components/MessageBox"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="container">
      <div>
        <Header />
        <MessageBox />
        <Footer />
      </div>
    </main>
  )
}
