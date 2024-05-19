<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini alın
    $adi = $_POST['adi'];
    $soyadi = $_POST['soyadi'];
    $email = $_POST['email'];
    $telno = $_POST['telno'];
    $sifre = $_POST['sifre'];
    $cinsiyet = $_POST['cinsiyet'];

    // Burada verileri bir dosyada veya veritabanında saklama işlemini gerçekleştirebilirsiniz

    // Ana sayfaya yönlendirin
    header("Location: index.html");
    exit();
}
?>
