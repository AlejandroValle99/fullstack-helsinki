import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({anecdotes, index, votes}) => {
  
  // let votestatus= false;
  // for (let i = 0; i < votes.length; i++) {
  //     if (votes[i] > 0) {
  //         votestatus = true;
  //         break;
  //     }
  // }
  // // console.log(votestatus)
console.log(votes)

const votestatus = votes.every(Equal => Equal === 0)



if (votestatus === true){
  return(
    <div>
      <p>No votes have been given yet!</p>
    </div>
  )
}
return(
  <div>
    <p>{anecdotes[index]}</p>
  </div>
)

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const v = Array(7).fill(0)

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(v)
  
  
  // console.log(votes)

  // const randomNumber = (min,max) => {
  //   return(
  //   Math.floor(Math.random()*(max-min+1))+min
  //   )
  // }


  const handleClick = () =>{
  const randomNumber = (min,max) => Math.floor(Math.random()*(max-min+1))+min
    setSelected(randomNumber(0,6))
  }

  // console.log(selected)

  const handleVotes = () =>{
    const votescopy = [...votes]
    const quote_pos = selected
    votescopy[quote_pos] += 1

    setVotes(votescopy)
  }



 
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    // console.log(index)



  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick = {handleClick} text = "Generate random number"/>
      <Button handleClick = {handleVotes} text = "Vote"/>
      <h2>Anecdotes with the most votes</h2>
      <Display anecdotes = {anecdotes} index = {index} votes = {votes}/>
      {/* <p>{anecdotes[index]}</p> */}
    </div>
  )
}

export default App