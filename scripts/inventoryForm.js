import { saveInventory } from "./inventoryDataProvider.js"

const contentTarget = document.querySelector(".inventory-form-container")
const eventHub = document.querySelector(".container")
const inventoryFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-inventory") {
      const newInventory = {
        name: document.querySelector("#inventory-name").value,
        weapons: document.querySelector("#inventory-weapons").value,
        armor: document.querySelector("#inventory-armor").value,
        equipment: document.querySelector("#inventory-equipment").value,
        gold: document.querySelector("#inventory-gold").value,


      }

      saveInventory(newInventory)
    }
  })
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-inventory") {
      const message = new CustomEvent("showInventoryButtonClicked")
      eventHub.dispatchEvent(message)
    }
  })
  const render = () => {
    contentTarget.innerHTML = `
    <div>
    <div class="inventory-field">Title: <input type="text" id ="inventory-name"></div>
    <div class="inventory-field">Text: <input type="text" id="inventory-weapons"></div>
    <div class="inventory-field">Text: <input type="text" id="inventory-armor"></div>
    <div class="inventory-field">Text: <input type="text" id="inventory-equipment"></div>
    <div class="inventory-field">Text: <input type="text" id="inventory-gold"></div>
    <button id="save-inventory">Save Inventory</button>
    <button id="show-inventory">Show all inventories</button>
    </div>
    `
  }
  render()
}

export default inventoryFormComponent