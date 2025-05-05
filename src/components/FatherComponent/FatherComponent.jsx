import Awards from '../Awards/Awards'
import History from '../History/History'
import MissionAndVisions from '../MissionAndVisions/MissionAndVisions'
import TeamMembers from '../TeamMembers/TeamMembers'

export default function FatherComponent() {
    return (
        <div className='FatherComponent Pb'>
            <MissionAndVisions />
            <Awards />
            <History />
            <TeamMembers />
            
            
        </div>
    )
}
