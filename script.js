const firebaseConfig = {
    apiKey: "AIzaSyDt7lMb3B84_BtCTgkMrmNpfyvXh1uTSkQ",
    authDomain: "webworx-ceff1.firebaseapp.com",
    databaseURL: "https://webworx-ceff1-default-rtdb.firebaseio.com",
    projectId: "webworx-ceff1",
    storageBucket: "webworx-ceff1.appspot.com",
    messagingSenderId: "544991171177",
    appId: "1:544991171177:web:012969979e0483244588f8"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Database
var projectInquiryDB = firebase.database().ref('projectInquiry');

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const saveMessages = (name, email, company, projectDetails, budget, deadline) => {
    var newProjectInquiry = projectInquiryDB.push();

    newProjectInquiry.set({
        name: name,
        email: email,
        company: company,
        projectDetails: projectDetails,
        budget: budget,
        deadline: deadline
    })
}

const submitForm = (e) => {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var company = getElementVal('company');
    var projectDetails = getElementVal('project-details');
    var budget = getElementVal('budget');
    var deadline = getElementVal('deadline');
    saveMessages(name, email, company, projectDetails, budget, deadline);
    alert('Thank you for your inquiry! I’ll review the details and get back to you shortly.')
}

document.getElementById('projectInquiry').addEventListener('submit', submitForm);

