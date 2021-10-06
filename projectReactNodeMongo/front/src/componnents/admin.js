import React, { useState, useEffect } from 'react'
import { getProdact } from '.././crud'
import AddProdact from './addProdact'

export default function Admin (props) {
  const [show, setShow] = useState(false)
  const [prodacts, setProdacts] = useState([])

  useEffect(async () => {
    let arayProdact = await getProdact()
    setProdacts(arayProdact)
  }, [])
  const addProdact = () => {
    console.log('addProdact')
    setShow(true)
  }
  const fromChild = data => {
    setShow(false)
    setProdacts([...prodacts, data])
  }
  const fromChildEdit = data => {
    console.log(data)
    // let newArr = [...prodacts]; // copying the old datas array
    // newArr[data.id] = data; // replace e.target.value with whatever you want to change it to
    // setProdacts(newArr); // 
        setShow(false)

  }
  return (
    <>
      <b>admin page</b>
      <div onClick={addProdact}>+ add prodact</div>
      {show ? <AddProdact add={fromChild} /> : null}

      <div>
        {prodacts &&
          prodacts.map((p, i) => {
            return (
              <div key={i} style={{ border: '1px solid' }}>
                <div>name:{p.nameprodact}</div>
                <div>price:{p.price}</div>
                descraption: <h4>{p.descraption}</h4>
                image: <img src={p.img} />
                <br />
                <div onClick={addProdact}>edit</div>
                { show ? <AddProdact edit={fromChildEdit} prodact={p}/> : null}
              </div>
            )
          })}
      </div>
    </>
  )
}
