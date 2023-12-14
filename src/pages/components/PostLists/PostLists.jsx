import Post from '../Posts/Post';
const PostLists = ({ displayPosts, onChangeHandler, checkedPosts }) => {
  if (displayPosts.length > 0) {
    return (
      <div className="posts__products">
        {displayPosts.map((item) => (
          <div key={item.id}>
            <input
              onChange={onChangeHandler}
              checked={checkedPosts.includes(item)}
              data-id={item.id}
              id={item}
              value={item.id}
              className="input__post"
              type="checkbox"
            />
            <Post key={item.id} post={item} />
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Товары не найдены</h1>;
  }
};

export default PostLists;
