import Post from "./Post";
import classes from "./PostsList.module.css";

const PostLists = () => {
  return (
    <ul className={classes.posts}>
      <Post author="John Doe" body="Hello, world!" />
      <Post author={"John Doe"} body={"Hello, world!"} />
    </ul>
  );
};

export default PostLists;
