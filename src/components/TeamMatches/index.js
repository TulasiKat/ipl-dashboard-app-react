// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    latestMatch: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDataDetails()
  }

  getDataDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    this.setState({
      teamData: updatedData,
      latestMatch: latestMatchDetails,
      recentMatchesList: updatedData.recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamData, latestMatch, recentMatchesList, isLoading} = this.state
    const recentList = recentMatchesList.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    return (
      <div className="container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamData.teamBannerUrl}
              alt="team banner"
              className="banner"
            />
            <p>Latest Matches</p>
            <LatestMatch latestMatch={latestMatch} />
            <ul>
              {recentList.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

// competing_team
// :
// "Sunrisers Hyderabad"
// competing_team_logo
// :
// "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png"
// date
// :
// "2020-11-06"
// first_innings
// :
// "Royal Challengers Bangalore"
// id
// :
// "1237178"
// man_of_the_match
// :
// "KS Williamson"
// match_status
// :
// "Lost"
// result
// :
// "Sunrisers Hyderabad Won by 6 wickets"
// second_innings
// :
// "Sunrisers Hyderabad"
// umpires
// :
// "PR Reiffel, S Ravi"
// venue
// :
// "At Sheikh Zayed Stadium, Abu Dhabi"
