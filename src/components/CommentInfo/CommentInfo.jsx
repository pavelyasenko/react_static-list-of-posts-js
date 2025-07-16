export const CommentInfo = ({ coments }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{coments.name}</strong>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${coments.email}`}>
        {coments.email}
      </a>
    </div>
    <div className="CommentInfo__body">{coments.body}</div>
  </div>
);
