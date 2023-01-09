// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, teamImageUrl, id} = details
  return (
    <Link to={`/team-matches/${id}`} className="li">
      <li className="lonely">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
