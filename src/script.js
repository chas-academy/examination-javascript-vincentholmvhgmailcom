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
  incomeList.innerText = ""
  expenseList.innerText = ""
  transactionList.innerText = ""
  let balance = 0

  for (let income of incomes) {
    const li = document.createElement("li")
    li.innerText = `${income.description} - ${income.amount} kr (Inkomst)`
    incomeList.appendChild(li)

    const Tli = document.createElement("li")
    Tli.innerText = `${income.description} - ${income.amount} kr (Inkomst)`
    transactionList.appendChild(Tli)

    balance = balance + income.amount
  }

  for (let expense of expenses) {
    const li = document.createElement("li")
    li.innerText = `${expense.description} - ${expense.amount} kr (Utgift)`
    expenseList.appendChild(li)

    const Tli = document.createElement("li")
    Tli.innerText = `${expense.description} - ${expense.amount} kr (Utgift)`
    transactionList.appendChild(Tli)

    balance = balance - expense.amount
  }

  balanceDisplay.innerText = `${balance}`
}

incomeBtn.addEventListener("click", () => {
  addIncome()
})

expenseBtn.addEventListener("click", () => {
  addExpense()
})