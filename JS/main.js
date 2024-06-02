let myInput = document.querySelector("input");
let myForm = document.querySelector("form");
let myResultDiv = document.querySelector(".result");

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

        if(myInput.value === " "){
            let theMeme = `
            <h2>Please Enter Valid Number</h2>
        `
        myResultDiv.innerHTML = theMeme;
        myInput.value = "";
        }

        if (myInput.value > 99 || myInput.value < 0){
            let theMeme = `
            <h2>invalid Number</h2>
        `
        myResultDiv.innerHTML = theMeme;
        myInput.value = "";

        }else {
            fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => {

                let theMeme = `
                <h2>${data.data.memes[myInput.value]["name"]}</h2>
                <img src=${data.data.memes[myInput.value]["url"]}>
            `
            myResultDiv.innerHTML = theMeme;
            myInput.value = "";
            })
            
        }
    // });
})


