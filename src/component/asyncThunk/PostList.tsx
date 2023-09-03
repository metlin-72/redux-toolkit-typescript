import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooker";
import {getPostList} from "./PostListAction";

const PostList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector((state) => state.post.value);
  const postCount = useAppSelector((state) => state.post.count);

  console.log("postList", postList);
  console.log("postStatus", postCount);

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  return (
    <div>
      <h1>Post List</h1>
      <hr />
      <ul>
        {postList.map((post, idx) => (
          <li key={idx}>
             <p>id: {post.id}</p> 
             <p>title: {post.title}</p> 
             <p>body: {post.body}</p> 
          </li>            
        ))}        
      </ul>
    </div>
  );
};

export default PostList;
