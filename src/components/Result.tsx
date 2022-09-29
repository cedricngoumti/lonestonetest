import React from 'react'
interface Props{
    userResult:number;
    computerResult:number;
}
const Result = ({userResult,computerResult}:Props) => {
    let result = null;
    if (userResult === 3) {
      result = <div className='result bg-success text-light d-flex'>Vous avez GagnÉ !</div>
    }
    if (computerResult === 3) {
      result = <div className='result bg-error text-light d-flex'>Perdu...</div>
    }

  return (
    <div>
        {result}
      </div>
  )
}

export default Result