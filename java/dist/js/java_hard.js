
let questions = [
    {
        id: 1,
        question:" Which of the below is valid way to instantiate an array in java?",
        answer:" int myArray [] = {1, 3, 5}; " ,
        options:[
        " int myArray [] [] = {1,2,3,4}; ",
        " int [] myArray = (5, 4, 3); ",
        " int [] myArray = {“1”, “2”, “3”};",
        " int myArray [] = {1, 3, 5}; ",
        
      ]
    },
     
    {
      id: 2,
      question:" which operator is considered to be with highest precedence?",
      answer:" () , [] " ,
     options:[
" =",
" () , [] ",
" ?:",
" %",

      ]
    },
    {
      id: 3,
      question: "What is not the use of “this” keyword in Java?",
      answer: "Passing itself to method of the same class ",
      options: [
        "Passing itself to another method",
        "Calling another constructor in constructor chaining",
        "Referring to the instance variable when local variable has the same name",
        "Passing itself to method of the same class"
      ]
    },
    {
    
            id: 4,
            question:" When static binding occurs?",
answer:" Static binding occurs during Compile time. " ,
options:[
" Static binding occurs during Compile time.",
" Static binding occurs during load time. ",
" Static binding occurs during runtime.",
" None of the above"
            ]
        },
    {
      id: 5,
      question: "Which of the following is method of JDBC batch process?",
      answer: "addBatch()",
      options: [
        "setBatch()",
        "deleteBatch()",
        "removeBatch()",
        "addBatch()"
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
  