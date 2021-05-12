
let questions = [
    {
        id: 1,
        question:" Which one of the following is a type of antivirus program? ",
        answer:"All of the above",
        options:[
        
         "Quick heal ",
        
        "Kaspersky",
        
        "Mcafee ",
        
        "All of the above "
      ]
    },
     
    {
      id: 2,
      question:"  It can be a software program or a hardware device that filters all data packets coming through the internet, a network, etc. it is known as the_______: ",
answer:"Firewall",
options:[

 "Antivirus ",

" Firewall",

"Cookies ",

" Malware"
      ]
    },
    {
      id: 3,
      question:" Which of the following refers to stealing one's idea or invention of others and use it for their own benefits? ",
answer:"All of the above",
options:[

 "Intellectual property rights ",

"Plagiarism ",

" Piracy",

"All of the above "
      ]
    },
    {
    
            id: 4,
            question:"Which of the following usually observe each activity on the internet of the victim, gather all information in the background, and send it to someone else?  ",
            answer:"Spyware",
            options:[
            
             "Malware ",
            
            "Spyware ",
            
            "Adware ",
            
            " All of the above"
            ]
        },
    {
      id: 5,
      question:" _______ is a type of software designed to help the user's computer detect viruses and avoid them. ",
      answer:"Antivirus",
      options:[
      
       "Malware ",
      
      " Adware",
      
      "Antivirus ",
      
      "Both B and C "
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
  