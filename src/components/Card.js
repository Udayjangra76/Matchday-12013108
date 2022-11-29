import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card.css'

const Card = ({data}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/match');
  }
  return (
    <div className='cardConatiner' onClick={handleClick}>
      <div className="topContainer">
        <h1 className="cardHeading">
            {data.tournament[0].name}
          </h1>
          <h3>{data.round}</h3>
      </div>
        
        <div className="bottomContainer">
          <div className="left">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T182834Z&X-Amz-Expires=86400&X-Amz-Signature=8251955c3eb9993f2c36cafd355490638e121f507b44e6806d771ec27fc56306&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className={data.team1[0].name === data.winner ? "crown" :"hidden crown"} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" className="flag" />
              <h3 className="name">{data.team1[0].name}</h3>
          </div>
          <div className="mid">
              <h3>v/s</h3>
              <h3 className="score">{`${data.a1}-${data.b1},${data.a2}-${data.b2},${data.a3}-${data.b3}`}</h3>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221126T124921Z&X-Amz-Expires=86400&X-Amz-Signature=a4fee9ec439ce118acaad840126e7357258ed110c2a7e423dd27a5f3745f6d71&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className="logo" />
          </div>
          <div className="right">
           <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T182834Z&X-Amz-Expires=86400&X-Amz-Signature=8251955c3eb9993f2c36cafd355490638e121f507b44e6806d771ec27fc56306&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className={data.team2[0].name === data.winner ? "crown" :"hidden crown"} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" className="flag" />
                <h3 className="name">{data.team2[0].name}</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
