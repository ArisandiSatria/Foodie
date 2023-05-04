
const getDataBmi = JSON.parse(localStorage.getItem('bmi'));
let tbody = document.getElementById("tbody")
// filter agar yang ditampilkan berdasarkan user yang login
let filteredBmi = getDataBmi.filter(function (bmi) {
    return bmi.email === getSession.email;
});

//looping baris table
let j = 1
filteredBmi.forEach(function (item) {
    let row = document.createElement('tr');
    row.classList.add("bg-gray-100", "border-b")

    let cellNo = document.createElement('td');
    cellNo.classList.add("px-6", "py-4")
    cellNo.innerHTML = j++;

    let cellWeight = document.createElement('td');
    cellWeight.classList.add("px-6", "py-4")
    cellWeight.innerHTML = item.weight + " kg";

    let cellResult = document.createElement('td');
    cellResult.classList.add("px-6", "py-4")
    cellResult.innerHTML = item.result;

    let cellStatus = document.createElement('td');
    cellStatus.classList.add("px-6", "py-4")
    cellStatus.innerHTML = item.status;

    let cellDate = document.createElement('td');
    cellDate.classList.add("px-6", "py-4")
    cellDate.innerHTML = item.today;

    row.appendChild(cellNo);
    row.appendChild(cellWeight);
    row.appendChild(cellResult);
    row.appendChild(cellStatus);
    row.appendChild(cellDate);

    tbody.appendChild(row);
});