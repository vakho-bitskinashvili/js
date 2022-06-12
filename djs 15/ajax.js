$('.loader').hide();


$('.btn').click(function (e) { 
   
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        beforeSend:function(){
            $('.loader').show();
        },
        complete:function(){
            $('.loader').hide(); 
        },
        
        success: function (response) {
            for (let index = 0; index < 15; index++) {
                let user=response[index]
                $('.divbody').append(`
                <div class="card col-md-4" ">
  <img src="${user.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card ${user.id}</h5>
    <p class="card-text">${user.title}.</p>
    <a href="#" class="btn btn-primary detailbtn" data-id="${user.id}">${user.id}</a>
    <button type="button" class="btn btn-danger deletebtn">delete</button>
    
  </div>
</div>
                
                `

                )
            
            }
            $('.deletebtn').click(function(){
               console.log(localStorage.getItem("postId",$(this).attr("data-id"))) 
            
            })
            $('.detailbtn').click(function(){
                localStorage.setItem("postId",$(this).attr("data-id"))
                window.location.href="detail.html"
            })
            
            for (const user of response) {
                $('.divbody').append(`
                <div class="card col-md-4" ">
  <img src="${user.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">${user.id}</a>
  </div>
</div>
                
                `

                )
                
            }
           
            
        },
        error:function(){
            $('.divbody').text("Eror 404")
        }
    });
    
});




const wrapper = document.getElementById('hamburger-wrapper')

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  var navopen=document.querySelector('.navopen')
  navopen.classList.toggle("navclose")
 
})











let data = [
    {
       id: 1,
       imageUrl: 'https://static.my.ge/myauto/photos/4/7/5/9/1/large/28195743_1.jpg?v=76' ,
       title: '',
       
    },
    {
        id: 2,
        imageUrl: 'https://static.my.ge/myauto/photos/1/9/2/1/1/large/73112917_1.jpg?v=2' ,
        title: '',
       
    },
    {
        id: 3,
        imageUrl: 'https://static.my.ge/myauto/photos/1/6/2/6/2/large/71262619_1.jpg?v=4' ,
        title: '',
       
    },
    {
        id: 4,
        imageUrl: 'https://static.my.ge/myauto/photos/7/3/0/2/8/large/66820377_1.jpg?v=3' ,
        title: '',
      
    }

]

let sliderIndex = 0;


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


function createAtag(item) {
  
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag;
}


function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    return tagImage;
}


function createH2tag(item) {
    let tagTitle = document.createElement('h2');
    
    tagTitle.append(item.title);
    tagTitle.classList.add('image-title');

    return tagTitle;
}


function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dot);
    });

    console.log(dots);

    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let dots = createDots();


    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

   
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}


function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
   
    setSlide();
}


arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);
setInterval( () => {
    arrowRightClick();
}, 3000);

setSlide();












let passwordNew = document.getElementById('passwnew');
let toggleIcon = document.getElementById('toggleIcon');

showHidePassword = () => {
    if (passwordNew.type == "password") {
        passwordNew.setAttribute('type', 'text');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        toggleIcon.classList.remove('fa-eye-slash');
        passwordNew.setAttribute('type', 'password');
    }
}





function validation() {
    let formEmail = document.getElementById('email-form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.match(patternEmail)) {
        formEmail.classList.add('valid');
        formEmail.classList.remove('invalid');
        text.innerHTML = 'Your Email is valid';
        text.style.color = 'green';
    } else {
        formEmail.classList.remove('valid');
        formEmail.classList.add('invalid');
        text.innerHTML = 'Please enter valid email address';
        text.style.color = 'red';
    }

    if (email == '') {
        formEmail.classList.remove('valid');
        formEmail.classList.remove('invalid');
        text.innerHTML = '';
    }
}

// $('.signinbtn').addEventListener('click',function(){
//     console.log("asdd")
//     // $('.signinform').toggleClass('.signinformshow');
// })

$('.signinbtn').click(function (e) { 
    console.log("adff")
    $('.signinform').classList.add('.signinformshow');
    
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}











