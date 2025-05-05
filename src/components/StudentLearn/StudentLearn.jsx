import { StudentCardsData } from '../Data/StudentCardsData'
import StartSections from '../StartSections/StartSections'
import StudentLearnCard from '../StudentLearnCard/StudentLearnCard'
import './StudentLearn.css'

export default function StudentLearn() {
    return (
        <div className='StudentLearn container'>
            <StartSections
                TopText="Our Features"
                Title="What Students Learn"
                Description="At Little Learners Academy, we strive to cultivate a love for learning and 
                        equip children with essential skills for their future success. Our academic programs cover 
                        a wide range of subjects, allowing students to develop a strong foundation and discover their
                         interests. Some key areas of learning include"

            />
            <div className='AllStudentCards'>
                <div className='StudentCards1'>
                    {
                        StudentCardsData.slice(0, 3).map((datast) => (
                            <StudentLearnCard
                                key={datast.id}
                                StudentImg={datast.StudentImg}
                                StudentTitle={datast.StudentTitle}
                                StudentText={datast.StudentText}

                            />
                        ))
                    }
                </div>
                <div className='StudentCards1 test'>
                    {
                        StudentCardsData.slice(3, 6).map((datast) => (
                            <StudentLearnCard
                                key={datast.id}
                                StudentImg={datast.StudentImg}
                                StudentTitle={datast.StudentTitle}
                                StudentText={datast.StudentText}

                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
