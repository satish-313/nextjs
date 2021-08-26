import styles from "../styles/Home.module.scss";

const BLOG_URL = "http://localhost:2368";
const CONTENT_API_KEY = "23b631a5a5ced67f7244b6d1b9";

type Post = {
  title : string
};

const getPost = async () => {
  // https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062&include=tags,authors

  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  );
  let postData = await res.json();
  // const titles = postData.posts.map((i) => i.title);
  // console.log(titles);
  return postData.posts;
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPost();
  return {
    props: { posts },
  };
};

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div className={styles.container}>
      <h1>my post</h1>
      <ul>
        {posts.map((post,i) => {
          return <li key={i}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
