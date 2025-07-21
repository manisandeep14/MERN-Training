 let getData = async() =>{
        let response = await fetch('http://127.0.0.1:5500/products.json')
        console.log(response)
        console.log(response.url)
        console.log(response.body)

        let data= await response.json();
        console.log(data);
      }
    getData()