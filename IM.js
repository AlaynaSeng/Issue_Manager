/*register*/
let userissues = [];
let allUsers = [];
$('#reg').click(() => {
    let name = $('#fn').val();
    let username = $('#un').val();
    let email = $('#em').val();
    let password = $('#pw').val();

    if (localStorage.getItem('All Users') !== null) {
        allUsers = JSON.parse(localStorage.getItem('All Users'));
    }

    if (name == '' || username == '' || email == '' || password == '') {
        alert("To register, fill out each part of the form");
        return;
    }

    let allUserInfo = {
        Name: name,
        Username: username,
        Email: email,
        Password: password,
        Issue: userissues
    }

    allUsers.push(allUserInfo);
    localStorage.setItem('All Users', JSON.stringify(allUsers));
    location.assign('Login.html');

})


$('#li').click(() => {
    let user = JSON.parse(localStorage.getItem('All Users'));

    if (document.getElementById('user').value == '' || document.getElementById('password').value == '') {
        alert("Enter your username/password");
        return;
    } else {
        for (i in user) {
            if (document.getElementById('user').value === user[i].Username && document.getElementById('password').value === user[i].Password) {
                localStorage.setItem('CurrUserIndex', JSON.stringify(i));
                console.log(i, user.length);
                if (document.getElementById('rm').checked) {
                    localStorage.setItem('remember', JSON.stringify(user[i]));
                }
                location.assign('Issues.html');
                return;
            } else {
                i++
            }
        }
    }
    if (i === user.length) {
        alert("Username or password are incorrect");
        return;
    }
})


function loadname() {
    let usersname = JSON.parse(localStorage.getItem('All Users'));
    let i = JSON.parse(localStorage.getItem('CurrUserIndex'));
    document.getElementById('name').innerHTML = usersname[i].Name;

    let userIssues = usersname[i].Issue;
    let useinfo = '';

    for (i in userIssues) {
        useinfo += `<div class = "col-4">
                    <p class = "border-top mt-3">Issue's ID: ${userIssues[i].Random}</p>
                    <p>${userIssues[i].Status}</p>
                    <h3>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
                    <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                    </svg>
                    ${userIssues[i].Description}
                    </h3>
                    <p>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-history" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                    <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    ${userIssues[i].Severity}
                    </p>
                    <p>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    ${userIssues[i].Employee}
                    </p>
                    <br>
                    <button id = "delete" type="button" class="btn btn-danger">Delete</button>
                    <button id = "closecase" type="button" class="btn btn-warning">Close</button>
                    </div>`
    }

    document.getElementById('recipt').innerHTML = useinfo;
}


let isslist = [];
$('#add').click(() => {
    let alluse = JSON.parse(localStorage.getItem('All Users'));
    let uindex = JSON.parse(localStorage.getItem('CurrUserIndex'));

    if (alluse[uindex].Issue !== null) {
        isslist = alluse[uindex].Issue;
    }

    let description = $('#des').val();
    let severity = $('#sev').val();
    let employee = $('#res').val();

    if (description == '' || employee == '') {
        alert('Please fill out all parts of the issues form to proceed');
        return;
    }

    let ranid = Math.floor(Math.random() * 900) + 100;

    let issueobj = {
        Description: description,
        Severity: severity,
        Employee: employee,
        Random: ranid,
        Status: 'Open'
    }
    isslist.push(issueobj);


    isslist = alluse[uindex].Issue;
    localStorage.setItem('All Users', JSON.stringify(alluse));
    console.log(userissues);

    loadname();

})


$('#log').click(() => {
location.assign('Login.html')
})


$('#recipt').on('click', 'button[id = "delete"]', function () {
    let au = JSON.parse(localStorage.getItem('All Users'));
    let ui = JSON.parse(localStorage.getItem('CurrUserIndex'));
    let yourissue = au[ui].Issue
    let i = $(this).parent().index();
    
    yourissue.splice(i, 1);
    yourissue = au[ui].Issue

    localStorage.setItem('All Users', JSON.stringify(au))
    loadname()
})


$('#recipt').on('click', 'button[id = "closecase"]', function () {
    let au2 = JSON.parse(localStorage.getItem('All Users'));
    let ui2 = JSON.parse(localStorage.getItem('CurrUserIndex'));
    let i2 = $(this).parent().index()
    let yourstatus = au2[ui2].Issue
    yourstatus[i2].Status = 'Closed'
    localStorage.setItem('All Users', JSON.stringify(au2))
    loadname()

})


function RE(){
    if (localStorage.getItem('remember') !== null) {
        let rememberedUser = JSON.parse(localStorage.getItem('remember'));
        let user = rememberedUser.Username;
        let pass = rememberedUser.Password;
        document.getElementById('user').value = user;
        document.getElementById('password').value = pass;
    }
}