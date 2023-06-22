let tempInput = document.getElementById('tempInput')
let tempResult = document.getElementById('tempResult')

let temperatureInput = document.querySelector('[data-temp-input]')
let temperatureResult = document.querySelector('[data-temp-result]')

function onConvert() {
    let tempNameInput = temperatureInput.dataset.tempInput

    let tempInputValue = tempInput.value

    let error = validate()

    if (error.tempInputValue) {
        displayError(error.tempInputValue, 'visible')
    }

    else if (!error.tempInputValue) {
        if (tempNameInput === 'celsius') {
                let tempResult = (tempInputValue * 9/5) + 32
                document.getElementById('tempResult').value = tempResult
                document.getElementById('kalkulasi').value = `(${tempInputValue} \u00B0C x 9/5) + 32 = ${tempResult} \u00B0F `
            }
    
        else if (tempNameInput === 'fahrenheit')  {
                let tempResult = (tempInputValue - 32) * 5/9
                document.getElementById('tempResult').value = tempResult
    
                document.getElementById('kalkulasi').value = `(${tempInputValue} \u00B0F - 32) x 5/9 = ${tempResult} \u00B0C `
        }
        displayError('', 'hidden')
    }
}

function validate() {
    let error = {}
    const tempInputValue = tempInput.value

    if (!tempInputValue) {
        error.tempInputValue = 'Input tidak boleh kosong'
    } 
    else if (isNaN(tempInputValue)) {
        error.tempInputValue = 'Input harus angka'
    }

    return error
}

function onReverse() {
    let tempNameInput = temperatureInput.dataset.tempInput

    tempInput.value = ''
    tempResult.value = ''
    document.getElementById('kalkulasi').value = ''
    displayError('', 'hidden')

    if (tempNameInput == 'celsius') {
        displayTemperature('fahrenheit', 'Fahrenheit (\u00B0F)', 'celsius', 'Celsius (\u00B0C)')

    } else {
        displayTemperature('celsius', 'Celsius (\u00B0C)', 'fahrenheit', 'Fahrenheit (\u00B0F)')
    }
}

function onReset() {
    tempInput.value = ''
    tempResult.value = ''
    document.getElementById('kalkulasi').value = ''
    displayError('', 'hidden')

    displayTemperature('celsius', 'Celsius (\u00B0C)', 'fahrenheit', 'Fahrenheit (\u00B0F)' )
}


// script untuk accordion explanation
const accordion = document.getElementsByClassName('container-explain')

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

function displayError (content, visibility) {
    document.getElementById('errorMsg').textContent = content
    document.getElementById('errorMsg').style.visibility = visibility
}

function displayTemperature (datasetInput, contentInput, datasetResult, contentResult) {
    temperatureInput.dataset.tempInput = datasetInput
    temperatureInput.textContent = contentInput

    temperatureResult.dataset.tempResult = datasetResult
    temperatureResult.textContent = contentResult
}