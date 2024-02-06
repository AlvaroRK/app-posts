const Post = ({ postC }) => {
  return (
    <>
      {postC.map((post, i) => {
        return (
          <div key={i}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};
export default Post;
