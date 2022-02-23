import React from "react";


const ClientCard = (props) => {
  return (
    <div className="client-card">
      <p className="date">{props.date}</p>
      <div className="flex">
        <span style={{ background: `${props.color}` }}>{props.text}</span>
      
      <div className="img" style={{ content: `url(${props.image})` }}></div>
      <p className="name">{props.name}</p>
      </div>
      <p className="desc">{props.desc}</p>
      <div className="button">
          <button type="button">Download</button>
      </div>
    </div>
  );
};

export default ClientCard;
