import headshotDemo from '../assets/images/headshotDemo.png'
import PostCard from '../cards/postCard'

export default function Home() {

    let examplePosts = [
        {
          title: 'Rise of the planet of the Apes',
          tags: ['monkey', 'chimp', 'film-Review'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover1.jpg'
        },
        {
          title: 'End of Evangelion',
          tags: ['japan', 'anime', 'mecha'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover2.jpg'
        },
        {
          title: 'Rise of the new Colosus',
          tags: ['fantasy', 'anime', 'manga', 'fururistic'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover3.jpg'
        },
        {
          title: 'The tales of the hungry Dawn',
          tags: ['space opera', 'war', 'pirates', 'film'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover4.jpg'
        },
        {
          title: 'Arichitechts of a brave new world',
          tags: ['archeology', 'sci-fi', 'space-travel' , 'manga'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover5.jpg'
        },
        {
          title: 'Rise of the planet of the Apes',
          tags: ['monkey', 'chimp', 'film-Review'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover6.jpg'
        }
      ]

      let latestPosts = []
      let counter1 = 0
      let counter2 = examplePosts.length - 1

      while (counter1 < 5) {
        latestPosts.push(examplePosts[counter2])
        counter1++
        counter2--
      }

      let truthTeller = () => {
        console.log(latestPosts)
      }


    return (
        <div className="homePage">
           <div className='heroSection'>
            <div className='newEpisodeContainer'>
                <PostCard /> <PostCard /> <PostCard /> <PostCard />
                <button onClick={truthTeller}>test your shit</button>
                <h4>new episodes come here</h4>
            </div>
            <div className='profileHeadshot'>
                <h4>my face comes here</h4>
            </div>
           </div>
        </div>
        
    )
}