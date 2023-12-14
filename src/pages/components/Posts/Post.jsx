import { useState } from 'react';
import './Post.scss';

const Post = ({ post, addCheckedPost, removeCheckedPost }) => {
  const [productChecked, setProductChecked] = useState(false);

  const checkboxHandler = () => {
    setProductChecked(!productChecked);
    if (productChecked === false) {
      addCheckedPost(post);
    } else {
      removeCheckedPost(post);
    }
  };

  return (
    <div className="posts">
      <span>{post.categories}</span>
      <span>{post.subcategory}</span>
      <span>{post.brand !== null ? post.brand : '-'}</span>
      <span>{post.items !== null ? post.items : '-'}</span>
      <span>{post.cashback}%</span>
    </div>
  );
};

export default Post;
