export class BookTable {
  constructor(bodyTableDOM, totalSumDOM, searchDOM, array, sorted){
    this.bodyTableDOM = bodyTableDOM;
    this.totalSumDOM = totalSumDOM;
    this.searchDOM = searchDOM;
    this.array = array;
    this.arrayFiltered = this.array;
    this.sorted = sorted;

    this.render(this.array);
    this.sum();
    this.searchDOM.addEventListener('keyup', this.search.bind(this));
  }
  
  render(obj) {
    this.bodyTableDOM.innerHTML = "";
  
    obj.map((property) => {
      let newRow = document.createElement("tr");

      Object.values(property).map(values => {
        const newCells = document.createElement("td");
        newCells.textContent = `${values}`;
        newRow.appendChild(newCells);
      });
      return this.bodyTableDOM.appendChild(newRow);
    });
  }

  search(event){
    const searchValue = event.currentTarget.value.toLowerCase();

    this.arrayFiltered = this.array.filter(element => element.title.toLowerCase().startsWith(searchValue));
    this.sum(this.arrayFiltered);
    this.render(this.arrayFiltered);
  }

  toggle() {
    this.sorted = !this.sorted;
   
    const arraySorted = this.arrayFiltered.sort((a, b) => {
      if (this.sorted) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      } 
    });
    this.render(arraySorted);
  }

  sum() {
    let arraySum = this.arrayFiltered.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    this.renderSum((arraySum).toFixed(2));
  }

  renderSum(totalSum) {
    this.totalSumDOM.innerText = `${totalSum}`;
  }
}