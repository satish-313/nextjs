import { useRouter } from "next/router";
import Link from "next/link"
import styles from "../../styles/Home.module.scss";

const {CONTENT_API_KEY,BLOG_URL} = process.env;

type Post = {
  title : string,
  html : string,
  slug : string
}

const getPost = async (slug:string) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  );
  const postData = await res.json();
  
  return postData.posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}  

const Post:React.FC<{post:Post}> = (props) => {
  // console.log(props)
  const {post} = props
  const router = useRouter()

  if (router.isFallback){
    return <h1>
      loading...
    </h1>
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        home
      </Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html:post.html}}></div>
    </div>
  )
}

export default Post;