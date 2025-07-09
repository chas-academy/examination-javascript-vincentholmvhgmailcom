const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balanceDisplay = document.getElementById("balance")

let incomes = []
let expenses = []

function addIncome() {
  let desc = descInput.value
  let amount = Number(amountInput.value)

  const newIncome = {
    description: desc,
    amount: amount
  }

  incomes.push(newIncome)

  descInput.value = ""
  amountInput.value = ""

  render()
}

function addExpense() {
  let desc = descInput.value
  let amount = Number(amountInput.value)

  const newExpense = {
    description: desc,
    amount: amount
  }

  expenses.push(newExpense)

  descInput.value = ""
  amountInput.value = ""

  render()
}

function render() {

  incomeList.innerHTML = ""
  expenseList.innerHTML = ""

  let balance = 0

  for (let income of incomes) {
    const li = document.createElement("li")
    li.innerHTML = `${income.description} - ${income.amount} kr (Inkomst)`
    incomeList.appendChild(li)

    const Tli = document.createElement("li")
    Tli.innerHTML = `${income.description} - ${income.amount} kr (Inkomst)`
    transactionList.appendChild(Tli)

    balance = balance + income.amount
  }

  for (let expense of expenses) {
    const li = document.createElement("li")
    li.innerHTML = `${expense.description} - ${expense.amount} kr (Utgift)`
    expenseList.appendChild(li)

    const Tli = document.createElement("li")
    Tli.innerHTML = `${expense.description} - ${expense.amount} kr (Utgift)`
    transactionList.appendChild(Tli)

    balance = balance - expense.amount
  }

  balanceDisplay.innerHTML = balance
}

incomeBtn.addEventListener("click", () => {
  addIncome()
})

expenseBtn.addEventListener("click", () => {
  addExpense()
})