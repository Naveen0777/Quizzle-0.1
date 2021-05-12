
let questions = [
    {
      id: 1,
      question: "Which of the following is true about protected access modifier?",
      answer: "Variables, methods and constructors which are declared protected can be accessed by any class lying in same package.",
      options: [
        "Variables, methods and constructors which are declared protected can be accessed by any class.",
        " Variables, methods and constructors which are declared protected can be accessed by any class lying in same package.",
        "Variables, methods and constructors which are declared protected in the superclass can be accessed only by its child class.",
        "None of the above."
      ]
    },
    {
      id: 2,
      question: "What is the size of float variable?",
      answer: "32 bit",
      options: [
        "8 bit",
        "16 bit",
        "32 bit",
        "64 bit"
      ]
    },
    {
      id: 3,
      question: "What is Abstraction?",
      answer: " It refers to the ability to make a class abstract in OOP",
      options: [
        "Abstraction is a technique to define different methods of same type.",
        "It refers to the ability to make a class abstract in OOP",
        "Abstraction is the ability of an object to take on many forms.",
        "None of the above."
      ]
    },
    {
      id: 4,
      question: " _____ is used to find and fix bugs in the Java programs.",
      answer: "JDB",
      options: [
        "JVM",
        "JRE",
        "JDK",
        "JDB"
      ]
    },
    {
      id: 5,
      question: "Which of the following for loop declaration is not valid?",
      answer: "Heap Memory",
      options: [
        "Heap Memory",
        "Stack",
        "String Memory",
        "Random storage space"
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
  