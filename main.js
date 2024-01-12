let input_contract_number = document.getElementById("contract_number");

function validate_contract_number() {
    // Checking empty input contract number
    // Onclick activation on SighIn button
    const status_contract_number = document.getElementById("status_contract_number");
    if (input_contract_number.value.trim() === "") {
        status_contract_number.innerText = "Введите номер договора";
        return false;
    }else{
        status_contract_number.innerText = "";

    }
    return true;
}

function request() {
    //transfer inputs data to bot
    // format: JSON
    const key = validate_contract_number();
    if (key) {
        let data = {
            contract_number: input_contract_number.value
        };
        let tg = window.Telegram.WebApp;
        tg.sendData(JSON.stringify(data));
    } 
}



