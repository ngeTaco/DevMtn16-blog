import './TopicList.css';

export default function TopicList() {
  const posts = [{ id: 0, title: 'Placeholder' }];

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  });
  return (
    <div className="TopicList">
      <h1>Latest Blog Posts...</h1>
      <ul>{displayTopics}</ul>
    </div>
  );
}
