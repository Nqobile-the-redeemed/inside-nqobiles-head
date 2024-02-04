import headshotDemo from '../assets/images/headshotDemo.png'
import PostCard from '../cards/postCard'

export default function Home() {
    return (
        <div className="homePage">
           <div className='heroSection'>
            <div className='newEpisodeContainer'>
                <PostCard /> <PostCard /> <PostCard />
                <h4>new episodes come here</h4>
            </div>
            <div className='profileHeadshot'>
                <h4>my face comes here</h4>
            </div>
           </div>
        </div>
        
    )
}