export default function Post(props){
    const {post} = props
    return(
        <div>
            <p>post detail</p>
            <p>id = {post.id}</p>
            <p>text = {post.text}</p>
        </div>
    )
}