
let questions = [
    {
        id: 1,
        question:" How to insert an image in HTML? ",
        answer:"<img src = 'jtp.png' />",
        options:[
        
         "<img link = 'jtp.png' /> ",
        
        " <img url = 'jtp.png' />",
        
        " <img href = 'jtp.png' />",
        
        "<img src = 'jtp.png' /> "
      ]
    },
     
    {
      id: 2,
      question:" How to add a background color in HTML? ",
answer:"<marquee bgcolor = 'red'>",
options:[

 " <marquee bg color: 'red'>",

" <marquee bg-color = 'red'>",

" <marquee bgcolor = 'red'>",

" <marquee color = 'red'>"

      ]
    },
    {
      id: 3,
      question:"HTML stands for -",
answer:"HyperText Markup Language",
options:[

 "HighText Machine Language ",

" HyperText and links Markup Language",

"HyperText Markup Language ",

" None of these"
      ]
    },
    {
    
            id: 4,
            question:"How to create an ordered list (a list with the list items in numbers) in HTML?  ",
answer:"<ol>",
options:[

 " <ul>",

"<ol> ",

" <li>",

" <i>"
            ]
        },
    {
      id: 5,
      question:" How to create a hyperlink in HTML? ",
      answer:"<a href = 'www.javatpoint.com'> javaTpoint.com </a>",
      options:[
      
       " <a href = 'www.javatpoint.com'> javaTpoint.com </a>",
      
      "<a url = 'www.javatpoint.com' javaTpoint.com /a> ",
      
      " <a link = 'www.javatpoint.com'> javaTpoint.com </a>",
      
      "<a> www.javatpoint.com <javaTpoint.com /a> "
      ]
      
    }
  
  
  
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  