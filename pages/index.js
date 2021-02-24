import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home</title>
        <meta name = "keywords" content = "ninjas"/>
      </Head>
      <div >
        
        <h1 className = {styles.title}> Home page </h1>
        <p className = {styles.text}> this is a paragraph</p>
        
        <Link href = '/ninja'><a className = {styles.btn}>See ninja listing</a></Link>
      
      </div>
    </>
  )
}
