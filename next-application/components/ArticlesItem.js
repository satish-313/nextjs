import Link from "next/link"
import StylesArticle from "../styles/Articles.module.css"

const ArticleItem = ({article}) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={StylesArticle.card}>
        <h4>{article.title} &rarr;</h4>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem