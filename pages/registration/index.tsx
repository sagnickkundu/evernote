import type { NextPage } from 'next'
import Head from 'next/head'
import Registration from '../../components/Auth/Registration'

const RegistrationPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create an Evernote Account</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Registration/>
    </div>
  )
}

export default RegistrationPage