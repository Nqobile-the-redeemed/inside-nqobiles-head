import PostTag from "../global-assets/postTag"

export default function CategoryCard({ data}) {
    
    let style = {
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: 'cover', /* This will scale the image to cover the entire div */
        backgroundposition: 'center', /* This will center the image in the div */
        overflow: 'hidden',
    }

    let categoryTags = data.tags.map((tag, index) => {
        return (
            <PostTag key={index} data={tag} />
        )
    })


    return (
        <button className="categoryCardButton">
        <div className="categoryCardCoverImage" style={style}>
        </div>
            <div className="categoryCardBody">
                    <p className="categoryCardTitle">{data.title}</p>  
                    {categoryTags}
                </div>
        </button>
    )
}

// {
//     title: 'Tales of the crypt keeper',
//     pageLink: 'tales-of-the-crypt-keeper',
//     filter: 'media',
//     tags: ['monkey', 'chimp', 'film-Review'],
//     description: 'This is a description of the post.',
//     summary: 'This is a summary of the post.',
//     coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
//     refHold: "",
//     detailedDescription: 'This is a detailed description of the category.',
//     categoryGallery: [
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/',
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/',
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/',
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/',
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/',
//       'https://source.unsplash.com/abstract-architecture-building-business-263402/'
//     ]
//   },