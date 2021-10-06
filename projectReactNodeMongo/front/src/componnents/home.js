import React, { useState, useEffect } from 'react'
import { getProdact } from '.././crud'
import ShoppingBag from './shoppingBag'
export default function Home (props) {
    const [prodacts, setProdacts] = useState([])
   const [shoppingBag, setShoppingBag] = useState([])

  useEffect(async()  => {
   let ps = await getProdact()
   setProdacts(ps)
  }, [])

const addProdactToShoppingBag = (i) => {
     setShoppingBag([...shoppingBag, prodacts[i]])

}
  return (
    <>
    <ShoppingBag shoppingBag={shoppingBag} />
   <div>
        {prodacts&&prodacts.map((p, i) => {
          return (
            <div key={i} style={{ border: '1px solid' }}>
              <div>name:{p.nameprodact}</div>
              <div>price:{p.price}</div>
              descraption: <h4>{p.descraption}</h4>
              image: <img src={p.img} />

              <br />
              
             <div onClick={()=>addProdactToShoppingBag(i)}>add to shopping bag</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
