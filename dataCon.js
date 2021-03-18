// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAPHAFZE26yka8A0zpjGmzBRHiMfDsXzZk",
    authDomain: "ux-web.firebaseapp.com",
    databaseURL: "https://ux-web-default-rtdb.firebaseio.com",
    projectId: "ux-web",
    storageBucket: "ux-web.appspot.com",
    messagingSenderId: "838505754949",
    appId: "1:838505754949:web:98ef87d418924c20714e2c",
    measurementId: "G-862LL0WWS5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var answers = [];
var empties = [];
var u_name, u_age, u_gender, u_q1, u_q2, u_q3, u_q4, u_q5, u_q6, u_q7, u_q8, u_wyglad, u_intuicja, u_sekcja, u_device;

function writeData() {
  const surveyRef = firebase.database().ref('Survey-noux');
    const survey = {
        name: answers[0],
        age: answers[1],
        gender: answers[2],
        przeszkadzajacy: answers[3],
        skomplikowany: answers[4],
        nieefektywny: answers[5],
        zagmatwany: answers[6],
        nudny: answers[7],
        nieinteresujacy: answers[8],
        konwencjonalny: answers[9],
        zwykly: answers[10],
        design: answers[11],
        intuitive: answers[12],
        section: answers[13],
        device: answers[14],
    };
  surveyRef.push(survey);
}

function getRadio(name){
  var radiogroup = document.getElementsByName(name);
  var choice;
  for  (let i=0; i<radiogroup.length; i++){
    if (radiogroup[i].checked) {
      choice = radiogroup[i].value;
    }
  }
  return choice;
}

function showAlert(elem, show){
  var el = document.getElementById("for-"+elem);
  if (show) {
    el.style = "color: red";
  } 
}

function resetStyles() {
  empties=[];
  var labels = document.querySelectorAll('label');
  labels.forEach(lab => {
    lab.style = "color: white";
  });
}

function checkValues() {
  if(u_name==="") {
    empties.push("name");
  }
  if(u_age==="") {
    empties.push("age");
  }
  if(typeof(u_gender)==="undefined") {
    empties.push("gender");
  }
  if(typeof(u_q1)==="undefined") {
    empties.push("wspierajacy");
  }
  if(typeof(u_q2)==="undefined") {
    empties.push("latwy");
  }
  if(typeof(u_q3)==="undefined") {
    empties.push("efektywny");
  }
  if(typeof(u_q4)==="undefined") {
    empties.push("przejrzysty");
  }
  if(typeof(u_q5)==="undefined") {
    empties.push("ekscytujacy");
  }
  if(typeof(u_q6)==="undefined") {
    empties.push("interesujacy");
  }
  if(typeof(u_q7)==="undefined") {
    empties.push("pomyslowy");
  }
  if(typeof(u_q8)==="undefined") {
    empties.push("skrajny");
  }
  if(typeof(u_wyglad)==="undefined") {
    empties.push("wyglad");
  }
  if(typeof(u_intuicja)==="undefined") {
    empties.push("intuicja");
  }
  if(typeof(u_sekcja)==="undefined") {
    empties.push("sekcja");
  }
  if(typeof(u_device)==="undefined") {
    empties.push("device");
  }
}

function submitData() {
  u_name = document.getElementById("name").value;
  u_age = document.getElementById("age").value;
  u_gender = getRadio("gender");
  u_q1 = getRadio("wspierajacy");
  u_q2 = getRadio("latwy");
  u_q3 = getRadio("efektywny");
  u_q4 = getRadio("przejrzysty");
  u_q5 = getRadio("ekscytujacy");
  u_q6 = getRadio("interesujacy");
  u_q7 = getRadio("pomyslowy");
  u_q8 = getRadio("skrajny");
  u_wyglad = getRadio("wyglad");
  u_intuicja = getRadio("intuicja");
  u_sekcja = getRadio("sekcja");
  u_device = getRadio("device");
  resetStyles();
  checkValues();
  if (empties.length !== 0) {
    for (let i=0; i<empties.length; i++){
      showAlert(empties[i], true);
    }
    return;
  }
  answers.push(u_name); answers.push(u_age); answers.push(u_gender); 
  answers.push(u_q1); answers.push(u_q2); answers.push(u_q3); answers.push(u_q4);
  answers.push(u_q5); answers.push(u_q6); answers.push(u_q7); answers.push(u_q8);
  answers.push(u_wyglad); answers.push(u_intuicja); answers.push(u_sekcja); answers.push(u_device);
  writeData();
}