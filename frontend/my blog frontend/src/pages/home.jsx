import headshotDemo from '../assets/images/headshotDemo.png'
import PostCard from '../cards/postCard'

export default function Home() {

    let examplePosts = [
        {
          title: 'Tales of the crypt keeper',
          class: 'omega',
          tags: ['monkey', 'chimp', 'film-Review'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover1.jpg'
        },
        {
          title: 'End of Evangelion',
          class: 'omega',
          tags: ['japan', 'anime', 'mecha'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover2.jpg'
        },
        {
          title: 'Rise of the new Colosus',
          class: 'omega',
          tags: ['fantasy', 'anime', 'manga', 'fururistic'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover3.jpg'
        },
        {
          title: 'The tales of the hungry Dawn',
          class: 'omega',
          tags: ['space opera', 'war', 'pirates', 'film'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover4.jpg'
        },
        {
          title: 'Arichitechts of a brave new world',
          class: 'omega',
          tags: ['archeology', 'sci-fi', 'space-travel' , 'manga'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover5.jpg'
        },
        {
          title: 'Rise of the planet of the Apes',
          class: 'omega',
          tags: ['monkey', 'chimp', 'film-Review'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'frontend/my blog frontend/src/assets/post images/cover6.jpg'
        }
      ]

      let latestPosts = []
      let counter1 = 0
      let counter2 = examplePosts.length - 1
      let indexHolder = ['alpha', 'beta', 'omega', 'sharingan']
      let counter3 = 0

      while (counter1 < 4) {
        latestPosts.push(examplePosts[counter2])
        latestPosts[counter1].refHold = indexHolder[counter3]
        counter1++ 
        counter2--
        counter3++
      }

      let truthTeller = () => {
        console.log(latestPosts)
      }

      let cardset = latestPosts.map((card, index) => {
                  return <PostCard key={index} data={card} className={refHold}/>
                })


    return (
        <div className="homePage">
           <div className='heroSection'>
            <div className='newEpisodeContainer'>
                {cardset}
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