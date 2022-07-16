//calcultor

function calcular() {
    let bill = document.getElementById("totalBill").value;
    let persons = document.getElementById("numberPeople").value;
    let tipPorcent = document.querySelector("input[name=tip]:checked").value;


    let tipAmount = bill * (tipPorcent / 100);

    let tipPerson = tipAmount / persons;
    document.getElementById("tip").innerText=tipPerson;
    let totalMount = Number(bill) + Number(tipAmount);
    let totalPerson = totalMount / persons;
    document.getElementById("totalPerson").innerText=totalPerson;

    console.log(totalPerson);
    
}

function reset(){
    document.getElementById("totalBill").value="Total Bill";
    document.getElementById("numberPeople").value="0";
    document.querySelector("input[name=tip]:unchecked").value;

}