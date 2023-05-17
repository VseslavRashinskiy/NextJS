import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Header from './Header';
import ShowCase from './Showcase';
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({title, keywords,description,children}){
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header />

      {router.pathname==='/' && <ShowCase />}

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
