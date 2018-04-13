import React from "react";
//Add styling to right and left icon
const icon = {
  paddingLeft:'5px',
  paddingRight:'5px',
  color:'#e2191c',
  fontSize:'22px'
}
//Add styling to Group Label
const groupLabel={
  paddingTop:'5px',
  fontWeight:'600'
}
const GroupTitleAndNav = ({ group_label, prev_group_id, next_group_id,handleNavClick}) => (
  //Standings navigation bar
    <div className="w3-row">
      <div className="w3-col s2 l2">&nbsp;</div>
      <div className="w3-col s1 l1"> <span onClick={() => handleNavClick(prev_group_id)}  style={icon}><i className="fa fa-angle-left next-prev-icon" ></i></span></div>
      <div className="w3-col s6 l6 w3-center"><h3 className="standings-h3" style={groupLabel}>
      <span>{group_label}</span>
      </h3></div>
      <div className="w3-col s1 l1"><span onClick={() => handleNavClick(next_group_id)} style={icon}><i className="fa fa-angle-right next-prev-icon"></i></span></div>
      <div className="w3-col s2 l2">&nbsp;</div>
    </div>
);

export default GroupTitleAndNav;