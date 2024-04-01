import CategoriesTab from "../global-assets/categoriesTab";
import CategoryCard from "./categoryCard";

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
                <button className="mediaSliderButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_722_783)">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_722_783">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                </button>
                <div className="mediaSliderPosts">
                    {selectedPosts}
                </div>
                <button className="mediaSliderButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_722_799)">
                    <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_722_799">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                </button>
            </div>
        </div>
    )
}

