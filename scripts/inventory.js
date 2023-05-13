const inventoryComponent = (inventory) => {


  return `
    <div>
      <div>${inventory.name}</div>
      <div>${inventory.weapons}</div>
      <div>${inventory.armor}</div>
      <div>${inventory.equipment}</div>
      <div>${inventory.gold}</div>
    </div>
  `
}

export default inventoryComponent