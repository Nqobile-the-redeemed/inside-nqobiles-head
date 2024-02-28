export default function Tag ({name, index}) {
    return (
        <div className="tagBody" index = {index}>
            <p className="tagText">
                {name}
            </p>
        </div>
    )
}