
const itemsList = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsList.length}`)
console.log(" ");
itemsList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
    console.log(" ");
});