import { useState } from 'react'

const Button = (props) =>(
  <button onClick = {props.handleClick}>{props.text}
  </button>
)

const StatisticLine = ({text,value}) =>{

  if(text==="positive"){
    value = value + " %"
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )


}

const Statistics = ({stateg, staten, stateb}) =>{
  // console.log(props)
  const tot = stateg + staten + stateb
  const ave = (stateg - stateb)/tot
  const pos = (stateg/tot)*100

  if (tot === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
  <div>
    <table>
      <tbody>
   <StatisticLine text = "good" value = {stateg}/>
   <StatisticLine text = "neutral" value = {staten}/>
   <StatisticLine text = "bad" value = {stateb}/>


   <StatisticLine text = "total" value = {tot}/>
   <StatisticLine text = "average" value = {ave}/>
   <StatisticLine text = "positive" value = {pos}/>
      </tbody>
   </table>
    {/* <p>
      good {stateg} 
      <br/>neutral {staten} 
      <br/>bad {stateb} 
      <br/>Total {tot} 
      <br/>Average {ave} 
      <br/>Positive {pos}% 
    </p> */}
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <div>

      <h1>give feedback</h1>
     
      <Button handleClick = {()=>setGood(good+1)} text = "good"/>
      <Button handleClick = {()=>setNeutral(neutral+1)} text = "neutral"/>
      <Button handleClick = {()=>setBad(bad+1)} text = "bad"/>

      <h1>statistics</h1>

      <Statistics stateg = {good} stateb={bad} staten={neutral}/>
    </div>

  )

}

export default App