import React from "react";
import BotCard from './BotCard'

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots?.map( (bot, i)=> <BotCard bot={bot} key={i} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
