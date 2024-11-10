const formatMoney = (amount) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return formatter.format(amount)
}

const totalPayment = (amount, term) => {
    let total = 0
    
    if( amount <= 1000 ) {
        total = amount * 1.25
    } else if (amount > 1000 && amount <= 5000) {
        total = amount * 1.20
    }
    else if (amount > 5000 && amount <= 10000) {
        total = amount * 1.15
    }
    else {
        total = amount * 1.10
    }

    if(term === 3) {
        total = total * 1.05
    }
    if(term === 6) {
        total = total * 1.10
    }
    if(term === 12) {
        total = total * 1.15
    }
    if(term === 24) {
        total = total * 1.20
    }

    return total
}

export {
    formatMoney,
    totalPayment
}