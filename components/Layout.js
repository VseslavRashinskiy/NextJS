import Head from "next/head"
import styles from '../styles/Layout.module.css'
import Header from './Header';
import Footer from "./Footer";

export default function Layout({title, keywords,description,children}){
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps={
  title: 'My App',
  description: 'My study project',
  keywords: 'study, app, project',
}
