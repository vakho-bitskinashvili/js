let filter = document.getElementById('filter');
let result = document.getElementById('result');
let listItems = [];

function getUsers() {
    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(element => {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = `${element.first_name} ${element.last_name}`;

            let img = document.createElement('img');
            img.src = element.avatar;

            li.appendChild(img);
            li.appendChild(span);

            listItems.push(li);

            result.appendChild(li);
        });
    })
    .catch(function(error) {
        console.log(error);
    })
}

getUsers();

function filterData(searchItem) {
    listItems.forEach( (item) => {
       if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() )) {
            item.classList.remove('hide');
       } else {
           item.classList.add('hide');
       }
    })
}


filter.addEventListener('input', function(event) {
    console.log(event);
    filterData(event.target.value)
});