const inventoryComponent = (inventory) => {


  return `
    <div>
      <div>Name: ${inventory.name}</div>
      <div>Weapons: ${inventory.weapons}</div>
      <div>Armor: ${inventory.armor}</div>
      <div>Equipment: ${inventory.equipment}</div>
      <div>Gold: ${inventory.gold}</div>
    </div>
  `
}

export default inventoryComponent