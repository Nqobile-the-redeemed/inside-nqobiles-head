import Tag from "../global-assets/tag"

export default function PostCard ({data, className, tags, title, description, summary, coverImage, refHold}) {

    const style = {
        backgroundImage: `url(${coverImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <button className={`postCardButton ${className}`} style = {style}>
            <div>
                <p className="postCardTitle">
                    {data.title}
                </p>
                <div className="tagContainer">
                    {data.tags.map((tag, index) => <Tag key={index} name ={tag} />)}
                </div>
            </div>
        </button>
    )
}