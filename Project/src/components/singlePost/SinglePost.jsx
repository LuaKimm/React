import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdn.pixabay.com/photo/2023/11/13/16/03/dead-sea-8385900_1280.jpg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Lua</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          necessitatibus quos amet quas harum tempore modi provident possimus
          eos sequi id mollitia, natus deleniti recusandae dolores omnis
          reiciendis, quam ducimus? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eaque necessitatibus quos amet quas harum tempore
          modi provident possimus eos sequi id mollitia, natus deleniti
          recusandae dolores omnis reiciendis, quam ducimus?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Eaque necessitatibus quos amet
          quas harum tempore modi provident possimus eos sequi id mollitia,
          natus deleniti recusandae dolores omnis reiciendis, quam ducimus?Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          necessitatibus quos amet quas harum tempore modi provident possimus
          eos sequi id mollitia, natus deleniti recusandae dolores omnis
          reiciendis, quam ducimus?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eaque necessitatibus quos amet quas harum tempore
          modi provident possimus eos sequi id mollitia, natus deleniti
          recusandae dolores omnis reiciendis, quam ducimus?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Eaque necessitatibus quos amet
          quas harum tempore modi provident possimus eos sequi id mollitia,
          natus deleniti recusandae dolores omnis reiciendis, quam ducimus?
        </p>
      </div>
    </div>
  );
}
