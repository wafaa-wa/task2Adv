import { TeamCardsData } from '../Data/TeamCardsData'
import StartSections from '../StartSections/StartSections'
import TeamCard from '../TeamCard/TeamCard'
import './TeamMembers.css'

export default function TeamMembers() {
    return (
        <div className='TeamMembers container'>
            <StartSections
                TopText="Our Teachers With Experties"
                Title="Our Team Members"
                Description="At Little Learners Academy, our teaching team is the heart of our educational journey.
                         We take great pride in employing highly qualified and passionate educators who possess a deep
                          understanding of early childhood development. Our teachers create a warm and engaging atmosphere,
                           encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className='TeamCards'>
                <div className='TeamCardRow'>
                    {
                        TeamCardsData.slice(0, 2).map((data1) => (
                            <TeamCard
                                key={data1.id}
                                ProfileTeamImg={data1.ProfileTeamImg}
                                ProfileName={data1.ProfileName}
                                ProfilreIcon={data1.ProfilreIcon}
                                ProfileTitle={data1.ProfileTitle}
                                ProfileText={data1.ProfileText}

                            />
                        ))
                    }
                </div>
                <div className='TeamCardRow'>
                    {
                        TeamCardsData.slice(2, 4).map((data2) => (
                            <TeamCard
                                key={data2.id}
                                ProfileTeamImg={data2.ProfileTeamImg}
                                ProfileName={data2.ProfileName}
                                ProfilreIcon={data2.ProfilreIcon}
                                ProfileTitle={data2.ProfileTitle}
                                ProfileText={data2.ProfileText}

                            />
                        ))
                    }
                </div>
                <div className='TeamCardRow'>
                    {
                        TeamCardsData.slice(4, 6).map((data3) => (
                            <TeamCard
                                key={data3.id}
                                ProfileTeamImg={data3.ProfileTeamImg}
                                ProfileName={data3.ProfileName}
                                ProfilreIcon={data3.ProfilreIcon}
                                ProfileTitle={data3.ProfileTitle}
                                ProfileText={data3.ProfileText}

                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
