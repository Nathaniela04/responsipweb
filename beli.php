<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST['ninja'];
    $tgl = $_POST['tgl'];
    $email = $_POST['email'];
    $username = $_POST['username'];

    $data = "Nama Ninja: $name\r\n";
    $data .= "Username Game: $username\r\n";
    $data .= "Tanggal Pembelian: $tgl\r\n";
    $data .= "Email: $email\r\n\r\n";

    $file = 'data_pembelian.txt';

    $handle = fopen($file, 'a'); 
    fwrite($handle, $data);
    fclose($handle);

    echo "<h2>Informasi yang Anda masukkan:</h2>";
    echo "<p>Nama Ninja : $name</p>";
    echo "<p>Username Game : $username</p>";
    echo "<p>Tanggal Pembelian : $tgl</p>";
    echo "<p>Email : $email</p>";
    echo "<p>Terimakasih sudah mengisi formulir! Data Anda telah disimpan.</p>";
    echo '<a href="home.html">Kembali ke menu awal</a>';

} else {
    echo "<p>Harap isi formulir terlebih dahulu.</p>";
    header("Location: home.html");
    exit();
}
?>
