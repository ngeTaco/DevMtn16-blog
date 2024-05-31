import './TopicList.css';
import { useLoaderData, Link } from 'react-router-dom';

export default function TopicList() {
  const posts = useLoaderData();

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>
      <Link to={`/post/${post.id}`}> {post.title}</Link>
      </li>;
  });
  return (
    <div className="TopicList">
      <h1>Latest Blog Posts...</h1>
      <ul>{displayTopics}</ul>
    </div>
  );
}
