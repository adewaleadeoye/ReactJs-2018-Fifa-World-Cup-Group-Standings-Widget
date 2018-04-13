import React, { Component } from "react";
import ReactDOM from "react-dom";
import GroupTitleAndNav from '../presentational/GroupTitleAndNav';
import TeamStatsInGroup from '../presentational/TeamStatsInGroup';


class GroupTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        standings: [],
        group_label:undefined, //Initialize group label (expected values Group A, Group B etc)
        next_group_id:undefined, //Navigate to group
        prev_group_id:undefined //Navigate back to previous group
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  //Fetch group data from server
  fetchFirst(group_id) {
    console.log("Group Id: "+group_id);
    var that = this;
      fetch('http://fcnaija.com/world-cup-2018/display-standings?group_id='+group_id).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log(JSON.stringify(result));
        that.setState({ standings: result.group_standing});
        that.setState({ group_label: result.group_label});
        that.setState({ next_group_id: result.next_group_id});
        that.setState({ prev_group_id: result.prev_group_id});
      });

  } 
  
  //Group navigation handler
  handleNavClick(group_id) {
    this.fetchFirst(group_id);
  }
  
  componentDidMount() {
    this.fetchFirst(28891);
  }
      
  render() {
    return (
        <div>      
        <GroupTitleAndNav group_label={this.state.group_label} prev_group_id={this.state.prev_group_id} 
        next_group_id={this.state.next_group_id} handleNavClick={this.handleNavClick}/>
          <div className="w3-padding">
            <div className="w3-row text-style">
              <div className="w3-col s1 l1">&nbsp;</div>
              <div className="w3-col s3 l3">&nbsp;</div>
              <div className="w3-col s1 l1">MP</div>
              <div className="w3-col s1 l1">W</div>
              <div className="w3-col s1 l1">D</div>
              <div className="w3-col s1 l1">L</div>
              <div className="w3-col s1 l1">GF</div>
              <div className="w3-col s1 l1">GA</div>
              <div className="w3-col s1 l1">GD</div>
              <div className="w3-col s1 l1">PTS</div>
            </div>
            {this.state.standings.map(group_standing =>
              <TeamStatsInGroup team_flag={group_standing.team_flag} team_name={group_standing.team_name}
              team_played={group_standing.team_played} team_won={group_standing.team_won} team_drawn={group_standing.team_drawn} 
              team_loss={group_standing.team_loss} team_goals_for={group_standing.team_goals_for} team_goals_against={group_standing.team_goals_against} 
              team_goals_difference={group_standing.team_goals_difference} team_points={group_standing.team_points} /> 
            )}
          </div>
        
 </div>
    );
  }
}
export default GroupTableContainer;
const wrapper = document.getElementById("world-cup-table");
wrapper ? ReactDOM.render(<GroupTableContainer />, wrapper) : false;