import React, { useState, useEffect } from 'react'
import { payServer } from '.././crud'

export default function ShoppingBag (props) {
  const [show, setShow] = useState(false)
  const [sum, setSum] = useState(0)
  const [shoppingBag, setShoppingBag] = useState()
  useEffect(() => {
setShoppingBag(props.shoppingBag)
  },[props.shoppingBag])
// let {shoppingBag} = props
  const openBag = () => {
      let sumTemp=0
     props.shoppingBag.map(p=>{
         console.log(p.price);
         sumTemp +=p.price
         })
      setSum(sumTemp)

    setShow(true)

  }
  const toPay = () =>{
  setShoppingBag([])
  setSum(0)
  setShow(false)
  payServer(shoppingBag)
  // alert(sum)

  }
  return (
    <>
      <div onClick={openBag}> my shopping bag </div>
      {show && (
        <div>
          bag list
          {shoppingBag &&
            shoppingBag.map((prodact, i) => {
              return <div key={i}>{prodact.nameprodact}: {prodact.price}</div>
            })}
<h2>total sum:{sum}</h2>
<button onClick={toPay}>to pay</button>
        </div>
      )}
    </>
  )
}
