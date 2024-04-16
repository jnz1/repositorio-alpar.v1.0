
class ContaBancaria {
    constructor() {
        this.saldo = 0;
        this.movimentacoes = [];
    }

    depositar(valor) {
        this.saldo += valor;
        this.movimentacoes.push({ tipo: 'Depósito', valor: valor });
    }


    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.movimentacoes.push({ tipo: 'Saque', valor: valor });
            return true;
        } else {
            return false;
        }
    }
    extrato() {
        return this.movimentacoes;
    }
}


const conta = new ContaBancaria();


function login() {
    const accountInput = document.getElementById("account");
    const passwordInput = document.getElementById("password");
    const accountNumber = accountInput.value;
    const password = passwordInput.value;

    if (accountNumber && password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("atm-container").style.display = "block";
    } else {
        alert("Por favor, insira o número da conta bancária e senha.");
    }
}

function deposit() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        conta.depositar(amount);
        updateBalance();
        amountInput.value = "";
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
}

function withdraw() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const success = conta.sacar(amount);
        if (success) {
            updateBalance();
            amountInput.value = "";
        } else {
            alert("Insufficient funds.");
        }
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
}

function showStatement() {
    const statement = conta.extrato();
    let statementText = "Extrato:\n";
    statement.forEach((movimento, index) => {
        statementText += `${index + 1}. ${movimento.tipo}: $${movimento.valor.toFixed(2)}\n`;
    });
    statementText += `Saldo Atual: $${conta.saldo.toFixed(2)}`;
    alert(statementText);
}

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = "Balance: $" + conta.saldo.toFixed(2);
}
