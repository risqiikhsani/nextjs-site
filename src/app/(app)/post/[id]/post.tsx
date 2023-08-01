interface Post {
    id: string;
    text: string;
  }
  
  export default function Post(props: { data: Post }) {
    const { data } = props; // Corrected the destructuring here
    return (
      <>
        <p>Post id = {data.id}</p>
        <p>Post text = {data.text}</p>
      </>
    );
  }
  