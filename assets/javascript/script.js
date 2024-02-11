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
        
    } catch (error) {
        console.log("Something went wrong")
    }
})

const langFrom = document.querySelector("#langFrom");
const langTo = document.querySelector("#langTo");
const translatedTextt = document.querySelector("#botInner");
const translateThis = document.querySelector("#textarea");
const changeIcon = document.querySelector('#changeIcon')



translateThis.addEventListener('keyup', async function(){
    console.log(translateThis.value)
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
        console.log(result.data.translatedText)
        translatedTextt.innerHTML = `${result.data.translatedText}`
    } catch (error) {
        console.error("error");
    }

})


changeIcon.addEventListener('click', function(){
    langFrom.innerHTML = `<option name="${langTo.name}" value="${langTo.value}">${langTo.name}</option>`;
    langTo.innerHTML = `<option name="${langFrom.name}" value = "${langFrom.value}">${langFrom.name}</option>`;

})

