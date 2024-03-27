import CategoriesTab from "../global-assets/categoriesTab";

export default function MediaSlider ({data, getColorSwatch, examplePosts}) {

    let categorySelection = examplePosts.filter((post) => post.categoryFilter === data.filter);

    let selectedPosts = categorySelection.map((post, index) => {
        return (
            <CategoryCard key={index} data={post} />
        )
    }
    )

    return (
        <div className="mediaSliderContent">
            <div className="mediaSliderOverview">
                <div className="nonTabItems">
                    <p className="mediaSliderTitle whiteBackgroundMediumTitle">{data.name}</p>
                    <p className="mediaSliderDescription whiteBackgroundBody">{data.shortDescription}</p>
                    <button className="mediaSliderButton whiteBackgroundButton">learn More</button>
                </div>
                <div className="categoryTabHolder">
                    {data.tags.map((category, index) => <CategoriesTab getColorSwatch={getColorSwatch} key={index} data={category} />)}
                </div>
            </div>
            <div className="mediaSliderSlider">
                <button className="mediaSliderButton">left</button>
                <div className="mediaSliderPosts">
                    {selectedPosts}
                </div>
                <button className="mediaSliderButton">right</button>
            </div>
        </div>
    )
}

