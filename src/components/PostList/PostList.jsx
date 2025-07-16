import { PostInfo } from '../PostInfo';

export const PostList = ({ users, posts, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const postUser = users.find(user => user.id === post.userId);
      const userComent = comments.filter(coment => posts.id === coment.postId);

      return (
        <PostInfo post={{ ...posts, users: postUser, comments: userComent }} />
      );
    })}
  </div>
);
