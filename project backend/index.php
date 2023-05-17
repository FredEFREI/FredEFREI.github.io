<?php
include 'db_connection.php';
include 'client_class.php';
include 'manage_client.php';
include 'manage_reservation.php';


$test = new Client("Charles", "Elderpog", "2023-5-12 19:30:00", "test2@gmail.com", "+33523426424", "5", "comment for test lol");
$test2 = new Client("Charles", "Elderberg", "2023-5-12 19:30:00", "nerco@gmail.com", "+33523426424", "4", "comment for test lol");
$test3 = new Client("Urdd", "Isé", "2023-5-12 19:30:00", "seed_light@gmail.com", "+33523426424", "4", "comment for test lol");
$test4 = new Client("Fire", "Golem", "2023-5-12 19:30:00", "the_strongest@gmail.com", "+33523426424", "4", "comment for test lol");
$test5 = new Client("Arch", "Itech", "2023-5-12 19:30:00", "fath_stone@gmail.com", "+33523426424", "4", "comment for test lol");

$test6 = new Client("Charles", "Elderpog", "2023-5-20 19:30:00", "test2@gmail.com", "+33523426424", "100", "comment for test lol");
$test7 = new Client("Cha", "Elder", "2023-5-20 19:30:00", "test@gmail.com", "+33523426424", "28", "comment for test lol");


flush_all_reservation();

add_reservation($test);
delete_reservation($test);
add_reservation($test2);
add_reservation($test3);
add_reservation($test4);
add_reservation($test5);
add_reservation($test6);
add_reservation($test7);


init_day("2023-6-1");
init_day("2023-6-1");






?>