
let questions = [
    {
      id: 1,
      question: "Which one of the following can be considered as the class of computer threats?",
      answer: "Dos Attack",
      options: [
        "Dos Attack",
        "Phishing",
        "Soliciting",
        "Both A and C"
      ]
    },
    {
      id: 2,
      question: "___ is a type of software designed to help the user's computer detect viruses and avoid them.",
      answer: "Antivirus",
      options: [
        "Malware",
        "Adware",
        "Antivirus",
        "Both 2 and 3"
      ]
    },
    {
      id: 3,
      question: "Which one of the following is a type of antivirus program?",
      answer: "All of the above",
      options: [
        "Quick heal",
        "Mcafee",
        "Kaspersky",
        "All of the above"
      ]
    },
    {
      id: 4,
      question: "To protect the computer system against the hacker and different kind of viruses, one must always keep _________ on in the computer system.",
      answer: "Firewall",
      options: [
        "Antivirus",
        "Firewall",
        "Vlc player",
        "Script"
          ]
    },
    {
      id: 5,
      question: "Which one of the following is also referred to as malicious software?",
      answer: "Malware",
      options: [
        "Maliciousware",
      "Badware",
      "Ilegalware",
      "Malware"
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
  