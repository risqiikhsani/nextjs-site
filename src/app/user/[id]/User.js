export default function User(props){
    const {user} = props
    return(
        <div>
            <p>user detail</p>
            <p>id = {user.id}</p>
            <p>name = {user.name}</p>
        </div>
    )
}