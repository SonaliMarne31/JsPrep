async function getData () {
    try {
        let response = await fetch(`https://www.breakingbadapi.com/api/characters`)
        let rData = await response.json()
        let data = rData;
        console.log(data) 

        const table = document.querySelector("table")
        const thead = table.querySelector('thead > tr')
        const tbody = table.querySelector('tbody')
        Object.keys(data[0]).forEach(attr => {
            thead.innerHTML +=
            `<th>${attr}</th>`;
        });
        data.forEach(ele => {
            let append = "";
            append += "<tr>";
            console.log(ele);
            Object.values(ele).forEach(entry => {
                append += `<td>${entry}</td>`
            })
            append += "</tr>";
            tbody.innerHTML += append;
        })


    } catch(e) {
        console.log('error getting data')
    }
};

getData();