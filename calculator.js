let salaryCLT = 1000 // salário inteiro clt
let salaryPJ = 1000 // salário inteiro pj

let benefitCLT = [100, 100] // lista de benefícios clt
let benefitPJ = [100] // lista de benefícios pj
let contador = 250 // mensalidade do contador para pj se for necessário

const CLT_TAX= 19 // total de descontos clt
const PJ_TAX = 6 // total de impostos pagos para pj

const INSS_TAX = 0 // não usado
const IRSS_TAX = 0 // não usado


var oneThirdVacation = (salary) =>  ((salary/3)/12)

var benefitSum = (benefit) => benefit.length == 0 ? 0 : benefit.reduce((total, num) => total + num)

var addTax = (salary, tax) => salary - (( salary / 100 ) * tax)

var c = (salary, tax, benefit) => {
  let totalBen = benefitSum(benefit)
  salWithTax = addTax(salary, tax)
  return salWithTax + totalBen + oneThirdVacation(salary)
}

var p = (salary, tax, benefit) => {
  let totalBen = benefitSum(benefit)
  salWithTax = addTax(salary, tax)
  let total =  salWithTax + totalBen - contador
  return (total * 12)/13
}

console.log(`clt = ${c(salaryCLT,CLT_TAX, benefitCLT)}`);

console.log(`pj = ${p(salaryPJ, PJ_TAX, benefitPJ)}`);
console.log(`pj em horas = ${p(salaryPJ, PJ_TAX, benefitPJ)/168}`);

function Sal(val) {

  this.value = val

  this.inss = () => this.value = this.value - ((this.value / 100) * INSS_TAX)

  this.irss = () => this.value = this.value - ((this.value / 100) * IRSS_TAX)

}

var s = new Sal(1)
s.inss()
s.irss()
//console.log(s.value);
