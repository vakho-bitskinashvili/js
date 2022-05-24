let mainWrapper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let closeOverlay = document.getElementById('close');
let content = document.getElementById('content');
let addButton = document.getElementById('add');
let postOverlay = document.getElementById('postOverlay');
let form = document.getElementById('form');


function ajax(url, callback) {
    let requist = new XMLHttpRequest();
    requist.open('GET', url);

    requist.addEventListener('load', function() {
        let data = JSON.parse(requist.responseText);
        callback(data);
       
    });
    requist.send();
}

ajax('https://jsonplaceholder.typicode.com/posts', function(data) {
    printData(data);
});


function printData(data) {
    data.forEach(element => {
        createPost(element);
    });
}

function createPost(item) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');
    divWrapper.setAttribute('data-id',item.id);
    

    let h2Tag = document.createElement('h2');
    h2Tag.innerText = item.id;

    let h3Tag = document.createElement('h3');
    h3Tag.innerText = item.title;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('data-id', item.id);

    divWrapper.appendChild(h2Tag);
    divWrapper.appendChild(h3Tag);
    divWrapper.appendChild(deleteButton);

    divWrapper.addEventListener('click', function(event) {
        let id = event.target.getAttribute('data-id');
        openOverlay(id);
    })

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        let id = event.target.getAttribute('data-id');
    
        deletePost(id);

    });

    mainWrapper.appendChild(divWrapper);

    // console.log(divWrapper);
}

function openOverlay(id) {
    overlay.classList.add('active');
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function(data) {
        overlayFunction(data);
    })
  
}

function deletePost(id) {
    // let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // fetch(url, {
    //     method:'DELETE',
    // })
    // const element = document.querySelector('div');
   var element =  document.querySelector("[data-id='"+id+"']");
   console.log(element);

    element.classList.add("delete");

    // element.removeAttribute('data-id',id)

}


function overlayFunction(item) {
    let title = document.createElement('h2');
    title.innerText = item.title;

    let description = document.createElement('p');
    description.innerText = item.body;
    description.classList.add('description');

    content.appendChild(title);
    content.appendChild(description);
}

closeOverlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    content.innerHTML = ' ';
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let formData = {
        title: event.target[0].value,
        description: event.target[1].value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            postOverlay.classList.remove('activeOverlay');
            console.log(json);
        });
});

addButton.addEventListener('click', function() {
    postOverlay.classList.add('activeOverlay');
})
