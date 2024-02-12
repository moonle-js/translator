// Adding languages for options on window onload
window.addEventListener('load',async function(){
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3bac3f8044mshd0e9722441068afp1b54a0jsnf3a95cffb192',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();

        for(let i = 1; i < result.data.languages.length; i++){
            langFrom.innerHTML += `
                <option name='${result.data.languages[i].name}' value = "${result.data.languages[i].code}">${result.data.languages[i].name}</option>        
            `
            langTo.innerHTML += `
                <option name='${result.data.languages[i].name}' value = "${result.data.languages[i].code}">${result.data.languages[i].name}</option>        
            `
        }

        //setting default languages
        for(let i = 0; i < langFrom.length; i++){
            if(langFrom.getElementsByTagName('option')[i].value == "az"){
                langFrom.getElementsByTagName('option')[i].selected = true;
            }
            if(langTo.getElementsByTagName('option')[i].value == "en"){
                langTo.getElementsByTagName('option')[i].selected = true;
            }
        }
        
    } catch (error) {
        console.log("Something went wrong")
    }
})


// catching elements from html
const langFrom = document.querySelector("#langFrom");
const langTo = document.querySelector("#langTo");
const translatedTextt = document.querySelector("#botInner");
const translateThis = document.querySelector("#textarea");
const changeIcon = document.querySelector('#changeIcon')




// function for translating
async function doTranslate(){
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '3bac3f8044mshd0e9722441068afp1b54a0jsnf3a95cffb192',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            body: new URLSearchParams({
                source_language: langFrom.value,
                target_language: langTo.value,
                text: translateThis.value
            })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        translatedTextt.innerHTML = `${result.data.translatedText}`
    } catch (error) {
        console.error("error");
    }
}


// translate everytime when we type in input
translateThis.addEventListener('keyup', doTranslate)


// change Icon clicking for change both languages 
changeIcon.addEventListener('click', function(){
    var currentFromValue;
    var currentToValue;
    for(let i = 0; i < langFrom.length; i++){
        if(langFrom.getElementsByTagName('option')[i].selected){
            currentFromValue = langFrom.getElementsByTagName('option')[i].getAttribute('value')
        }
    }

    for(let i = 0; i < langTo.length; i++){
        if(langTo.getElementsByTagName('option')[i].selected){
            currentToValue = langTo.getElementsByTagName('option')[i].getAttribute('value')
        }
    }


    for(let i = 0; i < langTo.length; i++){
        if(langTo.getElementsByTagName('option')[i].value == currentFromValue){
            langTo.getElementsByTagName('option')[i].selected = true;
        }
    }

    for(let i = 0; i < langTo.length; i++){
        if(langFrom.getElementsByTagName('option')[i].value == currentToValue){
            langFrom.getElementsByTagName('option')[i].selected = true;
        }
    }
    doTranslate();

})

// playing with styles
document.querySelectorAll('.userHead div')
    .forEach(function(element){
        element.addEventListener('click', function(e){
            if(this.id == "normal"){
                translateThis.style.fontStyle = "normal"
                translateThis.style.fontWeight = "normal"
            }
            if(this.id == "bond"){
                translateThis.style.fontWeight = `900`
            }
            translateThis.style.fontStyle = `${this.id}`
        })
    })