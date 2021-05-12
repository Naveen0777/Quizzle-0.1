
let questions = [
    {
        id: 1,
        question:" Which of the following element is responsible for making the text bold in HTML? ",
answer:"<b>",
options:[

 " <p>",

"<a> ",

" <b>",

"<br> "
        
      ]
    },
     
    {
      id: 2,
      question:" Which of the following tag is used for inserting the largest heading in HTML? ",
answer:"<h1>",
options:[

 "<h3> ",

" <h1>",

"<h5> ",

"<h6> "

      ]
    },
    {
      id: 3,
      question:" Which of the following tag is used to insert a line-break in HTML? ",
answer:"<br>",
options:[

 " <br>",

"<b> ",

" <pre>",

"<a> "
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
  