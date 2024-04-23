let themeChanger = document.getElementsByClassName("themeChanger")[0]
themeChanger.addEventListener("click", changeTheme)

function changeTheme(){
    let body = document.querySelector("body")
    body.classList.toggle("dark")
}

async function sendRequest(url, method, data) {
    if(method == "POST") {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        response = await response.json()
        return response
    } else if(method == "GET") {
        url = url+"?"+ new URLSearchParams(data)
        let response = await fetch(url, {
            method: "GET"
        })
        response = await response.json()
        return response
    }
}


let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", findMovie)

async function findMovie() {
    let searchTitle = document.getElementsByName("search")[0].value
    let response = await sendRequest("http://www.omdbapi.com/", "GET", {
        apikey: "1b7ff984",
        t: searchTitle
    })
    console.log(response)
}

// apikey: "3398b93d",