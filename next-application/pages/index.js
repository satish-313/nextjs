import Head from "next/head";

import ArticlesList from "../components/ArticlesList";
//  in next we can get access to api major three way
// 1 = getStaticProps fetch during build time 2 = getServerSideProp fetch in server time. slow in general
// 3 = getStaticPath = for any dynamic page for fetching we need this function

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default function Home({ articles }) {
  // console.log("article : ", articles)
  return (
    <div>
      <Head>
        <title>senocode</title>
        <meta name="dev" content="web development, programming,blog,cms" />
      </Head>
      <h1>next hello</h1>
      <ArticlesList articles={articles}/>
    </div>
  );
}
