import data from '../data/posts.js'

interface Props {
  id: number
  title: string
  date: string
  commentCount: number
  paragraphs: string[]
}
function Post(props: Props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.date}</h4>
      <p>{props.paragraphs}</p>
    </div>
  )
}

export default Post
