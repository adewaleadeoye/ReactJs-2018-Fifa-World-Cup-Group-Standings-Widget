import React from "react";
const GroupTitleAndNav = ({ group_label, prev_group_id, next_group_id,handleNavClick}) => (
    <div className="w3-row">
      <div className="w3-col s1 l1"  onClick={() => handleNavClick(prev_group_id)}> <i className="fa fa-angle-left"></i> </div>
      <div className="w3-col s10 l10 w3-center"><h2>{group_label}</h2></div>
      <div className="w3-col s1 l1" onClick={() => handleNavClick(next_group_id)}> <i className="fa fa-angle-right"></i> </div>
    </div>
);

export default GroupTitleAndNav;