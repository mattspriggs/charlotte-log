import postData from '../data/posts.js'
import Post from './Post.tsx'

function Posts() {
  return (
    <div>
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
export default Posts