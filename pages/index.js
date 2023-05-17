import Link from "next/link";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <h1>Main Page</h1>
      <Link href='/about'>About</Link>
    </Layout>
  )
}
