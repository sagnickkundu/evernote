import Head from 'next/head'
import Home from '../components/Home/Home';


const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Best Note Taking App - Organize Your Notes with Evernote</title>
        <meta name="description" content="A note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}

export default HomePage
