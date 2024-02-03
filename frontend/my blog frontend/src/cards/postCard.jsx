import Tag from "../global-assets/tag"

export default function PostCard () {
return (
    <button className="postCardButton">
        <div>
            <p className="postCardTitle">
                Title
            </p>
            <div className="tagContainer">
                <Tag>
            </div>
        </div>
    </button>
)
}