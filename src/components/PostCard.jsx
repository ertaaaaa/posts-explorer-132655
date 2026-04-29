// PostCard component
//Erta Azemi 132655

function PostCard({ post }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p><strong>ID:</strong> {post.id}</p>
        </div>
    );

    id: number,
        title: string,
        body: string,
        userID: number,
        featured: boolean,
        category: string // "News" | "Opinion" | "Tutorial"

//Featured post
    featured === true

    // Tutorial category
    category === "Tutorial"
}

export default PostCard;