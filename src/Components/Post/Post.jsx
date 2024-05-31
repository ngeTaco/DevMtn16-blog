import './Post.css';

export default function Post() {
  const title = 'Title';
  const content = 'Content';

  return (
    <div className="Post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
