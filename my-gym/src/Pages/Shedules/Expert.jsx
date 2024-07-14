import React from 'react'
import"./Expert.css"
import {PiWavesBold} from 'react-icons/pi';
import Trainer from './Trainer';
const Expert = () => {
  return (<div className="expertpage">
    <div className="expertbar">
  <h3 className="experttopic"><span className="expertspan">Expert </span><span className="expertspantwo">Trainer</span></h3>
<div className="expertwave"><PiWavesBold size={40}/></div>
<p className="expertpara">Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
</div>
<Trainer/>
  </div>

  )
}

export default Expert