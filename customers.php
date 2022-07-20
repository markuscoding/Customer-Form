<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','tbc');

// get the post records
$lastName = $_POST['lastName'];
$firstName= $_POST['firstName'];
$gender= $_POST['gender'];
$phoneNumber= $_POST['phoneNumber'];
$email = $_POST['email'];
$address1 = $_POST['address1'];
$lotNumber = $_POST['lotNumber'];
$country = $_POST['country'];
$password = $_POST['password1'];
$passwordCheck = $_POST['passwordCheck'];
$newsletter= $_POST['newsletter'];
$question = $_POST['question'];


// database insert SQL code
$sql = "INSERT INTO customers(lastName,firstName,gender,phoneNumber,email,address1,lotNumber,country,mainPassword,passwordCheck,newsletter,question) VALUES ('$lastName','$firstName','$gender','$phoneNumber','$email','$address1','$lotNumber','$country','$password','$passwordCheck','$newsletter','$question')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Customer Detail Successfully Submitted";
}
?>

