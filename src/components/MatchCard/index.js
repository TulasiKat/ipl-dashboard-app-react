// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, matchStatus, result, competingTeamLogo} = details
  return (
    <li>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatus === 'Lost' ? 'red' : 'green'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
