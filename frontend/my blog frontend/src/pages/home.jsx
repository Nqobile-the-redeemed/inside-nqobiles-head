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
          coverImage: 'https://source.unsplash.com/photo-of-train-rail-tunnel-13MzGKuJYSw',
          refHold: ""
        },
        {
          title: 'End of Evangelion',
          class: 'omega',
          tags: ['japan', 'anime', 'mecha'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'https://source.unsplash.com/red-staircase-bar-handle-OiERUvVrioU',
          refHold: ""
        },
        {
          title: 'Rise of the new Colosus',
          class: 'omega',
          tags: ['fantasy', 'anime', 'manga', 'fururistic'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'https://source.unsplash.com/a-view-of-a-city-with-tall-buildings-xU6gtfiLAak',
          refHold: ""

        },
        {
          title: 'The tales of the hungry Dawn',
          class: 'omega',
          tags: ['space opera', 'war', 'pirates', 'film'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'https://source.unsplash.com/high-rise-buildings-city-scape-photography-wpU4veNGnHg',
          refHold: ""
        },
        {
          title: 'Arichitechts of a brave new world',
          class: 'omega',
          tags: ['archeology', 'sci-fi', 'space-travel' , 'manga'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'https://source.unsplash.com/a-view-of-a-city-with-tall-buildings-and-a-body-of-water-3j4UXcPxwAQ',
          refHold: ""
        },
        {
          title: 'Rise of the planet of the Apes',
          class: 'omega',
          tags: ['monkey', 'chimp', 'film-Review'],
          description: 'This is a description of the post.',
          summary: 'This is a summary of the post.',
          coverImage: 'https://source.unsplash.com/brown-building-near-intersection-W_MUqtuHwyY',
          refHold: ""
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
                  return <PostCard key={index} data={card} className={card.refHold} coverImage={card.coverImage}/>
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