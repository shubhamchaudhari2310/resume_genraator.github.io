function addNewExperField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wkExpeField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here experience...')

    let wkExp = document.getElementById('workExpri');
    let wkExpButton = document.getElementById('workExperAddBtn');

    wkExp.insertBefore(newNode, wkExpButton);
}

function addNewQuliField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('qualiField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here Qulification...')

    let acQul = document.getElementById('acdamicQul');
    let acdamicButton = document.getElementById('qualiAddBtn');

    acQul.insertBefore(newNode, acdamicButton);
}


// Genrating CV

function generateCV() {
    // for name
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;
    // direct
    document.getElementById('nameT2').innerHTML = nameField;
    //   id
    //  contctField      contactT
    //  adreeField       addressT
    //  linkdInField     linkedT
    //  gitHubField      githubT
    //  instaField       instaT

    //  objectField      objeCardTpara
    //  workExpri        workWxpCardTUl           
    //  acdamicQul       acdQuliCardTUl
    //  imgField          imgTemplate

    // class
    // wkExpeField 
    // qualiField
    // myimage



    // for contact
    document.getElementById('contactT').innerHTML = document.getElementById('contctField').value;
    // for Address
    document.getElementById('addressT').innerHTML = document.getElementById('adreeField').value;

    // for Links
    document.getElementById('linkedT').innerHTML = document.getElementById('linkdInField').value;
    document.getElementById('githubT').innerHTML = document.getElementById('gitHubField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;


    // OBJECTIVE

    document.getElementById('objeCardTpara').innerHTML = document.getElementById('objectField').value;

    //  WORK EXPRIENCE
    let workExp = document.getElementsByClassName('wkExpeField');
    let str = ''
    for (let e of workExp) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById('workWxpCardTUl').innerHTML = str;


    //  ACADMIC QULIFICATION
    let acdQul = document.getElementsByClassName('qualiField');
    let str1 = ''
    for (let e of acdQul) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById('acdQuliCardTUl').innerHTML = str1;


    //  code for setting image 
    let imgFile = document.getElementById('imgField').files[0];
    console.log(imgFile);

    let reader = new FileReader();
    reader.readAsDataURL(imgFile);
    console.log(reader.result);


    //  set the image to template
    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result;
    }

    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";

}

function printCV() {
    window.print()
}