
let questions = [
    {
      id: 1,
      question:" What is output for following code − y = [4, 5,1j] y.sort() ",
      answer:"Type Error",
      options:[
      
       "Type Error",
      
      " [4,5,1j]",
      
      " [5,4,1j]",
      
      " [1j,4,5]"
        
      ]
    },
    {
      id: 2,
      question:" In the following options which are python libraries which are used for data analysis and scientific computations ",
answer:"All the above",
options:[

 "Pandas",

" Scipy",

"Numpy ",

" All the above"
      ]
    },
    {
      id: 3,
      question:"  What command is used to insert 6 in a list ‘‘L’’ at 3rd position ? ",
answer:"L.insert(2,6)",
options:[

 "L.add(3,6)",

" L.insert(2,6)",

"L.insert(3,6) ",

" L.append(2,6)"
      ]
    },
    {
      id: 4,
      question:"  What is the output of the following code? s = ''\t\t\t\n\nTutorialsPoint\n\n\n\t\t\t''s.strip() ",
answer:"TutorialsPoint'",
options:[

 "'\t\t\tTutorialsPoint\t\t\t'",

" '\n\nTutorialsPoint\n\n\n' ",

" TutorialsPoint'",

"'TutorialsPoint' , '\t\t\t\n\n \n\n\n\t\t\t' "
      ]
    },
    {
      id: 5,
      question:" Which event among them is fired when the right mouse button is released? ",
answer:"<ButtonReleased-3>",
options:[

 "<ButtonReleased-3>",

"<ButtonPressed-3> ",

" <ButtonPressed> ",

"  <ButtonReleased>"
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
  