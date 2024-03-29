import React from 'react'

export const Posts = ({posts}) => {
  return (
    <div>
        <ul>
            {posts.map(post => {
                <li key={post.id}>
                    {post.title}
                </li>
            })}
        </ul>
    </div>
  )
}

export default Posts;
