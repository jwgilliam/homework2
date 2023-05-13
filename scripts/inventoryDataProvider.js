let inventory = []

export const useInventory = () => {
  return inventory
}

export const saveInventory = inventory => {
  return fetch('http://localhost:8088/inventories', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(inventory)
  })
    .then(getInventory)

}

export const getInventory = () => {
  return fetch('http://localhost:8088/inventories', {
    method: "GET"

  })
    .then(response => response.json())
    .then((slicedInventory) => {
      inventory = slicedInventory.slice()
    })

}

