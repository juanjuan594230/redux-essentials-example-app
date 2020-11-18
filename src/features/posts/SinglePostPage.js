import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';

export const SinglePostPage = ({ match }) => {
    const { postId }  = match.params;
    // It's important to note that the component will re-render any time the value returned from useSelector changes to a new reference
    // 因此组件应该尽可能的选择仓库中所需数据的最小集合，这样能确保组件在真正需要更新的时候才会更新。
    // const posts = useSelector(state => state.posts);
    // const post = posts.find(post => post.id === postId); // it is bad, 会造成重复的渲染
    const post = useSelector(state => state.posts.find(post => post.id === postId));

    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostAuthor userId={post.user} />
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}