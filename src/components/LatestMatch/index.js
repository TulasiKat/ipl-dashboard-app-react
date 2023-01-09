// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  return (
    <>
      <div className="latest-match-card">
        <div className="first-part">
          <p>{latestMatch.competingTeam}</p>
          <p>{latestMatch.date}</p>
          <p>{latestMatch.venue}</p>
          <p>{latestMatch.result}</p>
        </div>
        <div className="second-part">
          <img
            src={latestMatch.competingTeamLogo}
            alt={`latest match ${latestMatch.competingTeam}`}
            className="comp-logo"
          />
        </div>
        <div className="third-part">
          <h2>First Innings</h2>
          <p>{latestMatch.firstInnings}</p>
          <h2>Second Innings</h2>
          <p>{latestMatch.secondInnings}</p>
          <h2>Man Of The Match</h2>
          <p>{latestMatch.manOfTheMatch}</p>
          <h2>Umpires</h2>
          <p>{latestMatch.umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
