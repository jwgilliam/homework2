import { useInventory } from "./inventoryDataProvider.js";
import inventoryComponent from "./inventory.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".inventory-list-container");

const inventoryList = () => {
  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "show-inventory") {
      const allInventories = useInventory()
      render(allInventories)
    }
  })
  const render = allInventories => {
    contentElement.innerHTML = `${allInventories

      .map(inventories => {
        return inventoryComponent(inventories)
      })
      .join("")
      }`
  }
}

export default inventoryList