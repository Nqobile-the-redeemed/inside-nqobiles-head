import SkillTag from "../global-assets/skillTag"

export default function SkillCard ({data}){

    let skillTagSet = data.tag.map((skill, index) => {
        return <SkillTag data={skill} key={index}/>
    })

   

    return(
        <div className="skillCard">
            <p>{data.skill}</p>
            <div className="skillTagHolder">
                {skillTagSet}
            </div>
        </div>

    )
}


   