import { getInventory } from "./inventoryDataProvider.js"
import inventoryList from "./inventoryList.js"
import inventoryFormComponent from "./inventoryForm.js"

getInventory().then(inventoryFormComponent).then(inventoryList)