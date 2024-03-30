function validateCard() {
    var cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, ''); // Menghapus spasi dari nomor kartu
    if (isValidLuhn(cardNumber)) {
        document.getElementById("result").innerText = "Nomor kartu VALID!";
    } else {
        document.getElementById("result").innerText = "Nomor kartu TIDAK VALID!";
    }
}

function isValidLuhn(cardNumber) {
    var sum = 0;
    var isEven = false;
    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var digit = parseInt(cardNumber.charAt(i), 10);
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isEven = !isEven;
    }
    return sum % 10 == 0;
}
