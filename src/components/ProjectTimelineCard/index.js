import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {title, projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <p>{title}</p>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectTimelineCard
