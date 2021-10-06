import React, { useState, useEffect } from 'react'
import Modal from 'react-awesome-modal'

import { addProdact, editProdact } from '.././crud'
import Admin from './admin'

export default function AddProdact (props) {
  const [prodact, setProdact] = useState({
    nameprodact: 'input name',
    price: 0,
    description: 'inut descraption hare',
    img:'input img url'
  })

  const handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setProdact({
      [name]: value
    })
  }
  const handleSubmit = async event => {
    let res = props.add ? await addProdact(prodact) : await editProdact(prodact)
    props.add ? props.add(res) : props.edit(res)
  }
  return (
    <>
      <Modal
        style={{ top: '14vh !important' }}
        visible='true'
        width='25%'
        height='20%'
        effect='fadeInDown'
      >
        <form>
          <label>
            name prodact:
            <input
              name='nameprodact'
              type='text'
              value={props.prodact?props.prodact.nameprodact:"no name"}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            price:
            <input
              name='price'
              type='number'
              value={props.prodact?props.prodact.price:0}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            descraption:
            <input
              name='descraption'
              type='text'
              value={prodact.descraption}
              maxLength='6'
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            image:
            <input
              name='img'
              type='text'
              value={prodact.img}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            submit:
            <input type='button' onClick={handleSubmit} value='Submit' />
          </label>
          <br />
        </form>
      </Modal>
    </>
  )
}
