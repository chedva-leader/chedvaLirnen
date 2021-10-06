export const getProdact = () => {
  return fetch('http://localhost:8082/getProdacts', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resJson => {return resJson})
}
export const addProdact = (prodact) => {
  return fetch('http://localhost:8082/addProdact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({prodact})
  })
    .then(res => res.json())
    .then(resJson => {
      console.log("hu",resJson)
        return resJson.prodact
    })
}
export const editProdact = (prodact) => {
  return fetch('http://localhost:8082/editProdact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({prodact})
  })
    .then(res => res.json())
    .then(resJson => {
      console.log("hu",resJson)
       alert("hu",resJson)

        return resJson.prodact
    })
}

export const payServer = () => {
   return fetch('http://localhost:8082/payServer', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(alert("העסקה הושלמה"))
}
