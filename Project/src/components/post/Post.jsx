import "./post.css";

export default function Posts() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
        repellendus consequuntur cupiditate minus aliquam quisquam et, debitis
        mollitia eaque earum! Suscipit esse vel impedit perspiciatis totam
        corporis nulla possimus.
      </p>
    </div>
  );
}
