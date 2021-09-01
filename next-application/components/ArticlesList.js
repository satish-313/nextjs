import ArticleItem from "./ArticlesItem"
import StylesArticle from "../styles/Articles.module.css"

const ArticlesList = ({articles}) => {
  return (
    <div className={StylesArticle.grid}>
      { articles.map((a,i) => {
        return (
          <ArticleItem key={i} article={a}/>
        )
      })}
    </div>
  )
}

export default ArticlesList;