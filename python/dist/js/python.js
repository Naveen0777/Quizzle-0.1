
let questions = [
    {
      id: 1,
      question: "Given a function that does not return any value, What value is thrown by default when executed in shell.",
      answer: "None",
      options: [
        "int",
        "bool",
        "void",
        "None"
        
      ]
    },
    {
      id: 2,
      question: " Which of these in not a core data type?",
      answer: "Class",
      options: [
        "Lists",
        "Tuples",
        "Dict",
        "Class"
      ]
    },
    {
      id: 3,
      question: "Which of the following will run without errors?",
      answer: "round(45.8)",
      options: [
        "round(45.8)",
        "round(6352.898,2,5)",
        "round()",
        "round(7463.123,2,1)"
      ]
    },
    {
      id: 4,
      question: "What error occurs when you execute the following Python code snippet?  apple = mango",
      answer: "NameError",
      options: [
        "SyntaxError",
        "NameError",
        "ValueError",
        "TypeError"
      ]
    },
    {
      id: 5,
      question: "What is the average value of the following Python code snippet? >>>grade1 = 80  >>>grade2 = 90  >>>average = (grade1 + grade2) / 2",
      answer: "85.0",
      options: [
        "85.0",
        "85.1",
        "95.0",
        "95.1"
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
  