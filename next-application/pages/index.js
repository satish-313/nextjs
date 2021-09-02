import ArticlesList from "../components/ArticlesList";
//  in next we can get access to api major three way
// 1 = getStaticProps fetch during build time 2 = getServerSideProp fetch in server time. slow in general
// 3 = getStaticPath = for any dynamic page for fetching we need this function

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/article`)
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
      <h1>next hello</h1>
      <ArticlesList articles={articles}/>
    </div>
  );
}
