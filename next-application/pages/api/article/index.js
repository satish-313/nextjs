const articleFetch = async(req,res) => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const articles = await responce.json()

  res.status(200).json(articles)
}

export default articleFetch;