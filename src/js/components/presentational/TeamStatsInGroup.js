import React from "react";
const flagStyle = {
    width: '80%',
};
const TeamStatsInGroup = ({team_flag,team_name,team_played,team_won,team_drawn,team_loss,team_goals_for,team_goals_against,team_goals_difference,team_points}) => (
    <div className="w3-row w3-border-bottom">
        <div className="w3-col s1 l1">
            <img src={team_flag} style={flagStyle}/>
        </div>
        <div className="w3-col s3 l3">{team_name}</div>
        <div className="w3-col s1 l1">{team_played}</div>
        <div className="w3-col s1 l1">{team_won}</div>
        <div className="w3-col s1 l1">{team_drawn}</div>
        <div className="w3-col s1 l1">{team_loss}</div>
        <div className="w3-col s1 l1">{team_goals_for}</div>
        <div className="w3-col s1 l1">{team_goals_against}</div>
        <div className="w3-col s1 l1">{team_goals_difference}</div>
        <div className="w3-col s1 l1">{team_points}</div>
    </div>
);

export default TeamStatsInGroup;