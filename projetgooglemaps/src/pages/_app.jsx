import "@/styles/globals.css"
import Link from "next/link"
import Image from "next/image"

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <header className="bg-green-300 border-4 border-green-600">
      <div className="mx-auto max-w-5xl p-4 flex justify-between items-center">
        <Image
          src="/mapmonde.png"
          width={100}
          height={100}
        />
        <nav>
          <ul className="font-bold flex gap-20">
            <li>
              <Link href="/locations/create">CREATE</Link>
            </li>
            <li>
              <Link href="/">LIST</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section>
      <div className="mx-auto max-w-5xl p-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
)

export default App