const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const container = document.getElementById("container");

/*function showData(dataArray) {
    for (const item of dataArray) {
      container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; 
    }
  }
  
  async function pedidoURL() {
    let response = await fetch(DATA_URL);
    let json = await response.json();
    showData(json.students);
  }
  
  pedidoURL();

  