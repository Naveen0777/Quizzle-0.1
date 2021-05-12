
let questions = [
    {
        id: 1,
        question:" Several computers linked to a server to share programs and storage space. ",
answer:"Network",
options:[

 "Library ",

" Network",

" Grouping",

" Integrated system"
        
      ]
    },
     
    {
      id: 2,
      question:" A term related sending data to a satellite is? ",
answer:" Uplink",
options:[

 " Demodulate ",

"Downlink",

"  Modulate",

"  Uplink"
      ]
    },
    {
      id: 3,
      question:" The common name for a modulator-demodulator is ",
answer:"Modem",
options:[

 " Modem",

" Joiner",

" Networker",

" Connector"
      ]
    },
    {
    
            id: 4,
            question:"Which of the following device is used to connect two systems, especially if the systems use different protocols? ",
answer:"Gateway",
options:[

 "Repeater ",

"Gateway ",

" Bridge",

" HUB"
            ]
        },
    {
      id: 5,
      question:" The Internet is",
answer:"A large network of networks",
options:[

 " An internal communication system for a business",

" A communication system for the Indian government",

" A communication system for some states of India",

" A large network of networks"
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
  