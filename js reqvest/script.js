let currentPage = 1;

 let totalPages;

function getPosts() {
    let requist = new XMLHttpRequest();

    requist.addEventListener('load', render);
    requist.addEventListener('error', errorRender);
    requist.open('GET', 'https://reqres.in/api/users?page2');
    requist.send();
   
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();
         responseData.data.forEach(element => {
             let li = document.createElement('li');
             let p = document.createElement('p');
             p.textContent = element.email;
            
             let img = document.createElement('img');
             img.classList.add('image-block');
             img.src = element.avatar;
             
             li.appendChild(img);
             li.appendChild(p);
             
             fragment.appendChild(li);
         });
         document.getElementById('list').innerHTML = ' ';
         document.getElementById('list').appendChild(fragment);
         
         totalPages = responseData.total_pages;
         
    }

    function errorRender() {
        let pTag = document.createElement('p');
        pTag.textContent = 'server Error';

        document.getElementById('api').appendChild(pTag);
    }

    document.getElementById('prev').addEventListener('click', function() {
     if (currentPage == 1) {
         return;
            }
           currentPage -=1;
            getUsers(currentPage);
         });
        
         document.getElementById('next').addEventListener('click', function() {
             if (currentPage == totalPages) {
             return;
         }
            currentPage += 1;
            getUsers(currentPage);
        })
}

getPosts();

