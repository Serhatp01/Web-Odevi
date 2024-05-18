function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const name = document.getElementById('ad').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('telefon').value.trim();
    const message = document.getElementById('mesaj').value.trim();

    if (name === '') {
        alert('Ad Soyad alanı boş bırakılamaz.');
        return false;
    }

    if (email === '') {
        alert('E-posta alanı boş bırakılamaz.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Geçerli bir e-posta adresi girin.');
        return false;
    }

    if (phone === '') {
        alert('Telefon alanı boş bırakılamaz.');
        return false;
    }

    if (message === '') {
        alert('Mesaj alanı boş bırakılamaz.');
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        alert('Form başarıyla gönderildi!');
        document.getElementById('contactForm').reset();
    }
}

function clearForm() {
    document.getElementById('contactForm').reset();
}

function submitForm() {
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const mesaj = document.getElementById('mesaj').value;

    // Form verilerini bir nesne olarak oluşturun
    const formData = {
        ad: ad,
        email: email,
        telefon: telefon,
        mesaj: mesaj
    };

    // Mevcut form verilerini localStorage içindeki mevcut verilere ekleyin
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(formData);
    localStorage.setItem('messages', JSON.stringify(messages));

    alert('Mesajınız başarıyla gönderildi!');

    // Formu temizleyin
    clearForm();
}

function clearForm() {
    document.getElementById('contactForm').reset();
}

function showMessages() {
    window.location.href = 'GonderilenMesajlar.html';
}
