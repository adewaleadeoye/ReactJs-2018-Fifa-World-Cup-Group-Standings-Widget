import React from "react";
//Add styling to flag
const flagStyle = {
    width: '100%',
    paddingRight:'3px',
};
//Add top and bottom padding to data rows
const tppad = {
    paddingTop:'5px',
    paddingBottom:'5px'
  }
//Add padding top to team name  
const topPad ={
    paddingTop:'2px',
}  
const TeamStatsInGroup = ({team_flag,team_name,team_played,team_won,team_drawn,team_loss,team_goals_for,team_goals_against,team_goals_difference,team_points}) => (
    //Standings columns
    <div className="w3-row w3-border-bottom" style={tppad}>
        <div className="w3-col s1 l1">
            <img src={team_flag} style={flagStyle}/>
        </div>
        <div className="w3-col s3 l3 text-style" style={topPad}>{team_name}</div>
        <div className="w3-col  s1 l1 text-style">{team_played}</div>
        <div className="w3-col s1 l1 text-style">{team_won}</div>
        <div className="w3-col s1 l1 text-style">{team_drawn}</div>
        <div className="w3-col s1 l1 text-style">{team_loss}</div>
        <div className="w3-col s1 l1 text-style">{team_goals_for}</div>
        <div className="w3-col s1 l1 text-style">{team_goals_against}</div>
        <div className="w3-col s1 l1 text-style">{team_goals_difference}</div>
        <div className="w3-col s1 l1 text-style">{team_points}</div>
    </div>
);

export default TeamStatsInGroup;