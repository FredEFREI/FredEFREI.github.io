<?php

function add_reservation($client)
{
    echo "------------ Adding client<br/>";

    $conn = OpenCon();

    $sql_select = "select * from reservations where date = '$client->date'";
    $result = mysqli_query($conn, $sql_select);
    $array = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $array[] = $row;
    }
    if (empty($array)) {
        echo "The restaurant is not open at that time<br/>";
    } else {
        $update_number = $array[0]['number'] + ceil($client->number / 4);
        $array_capacity = $array[0]['capacity'];
        if ($array_capacity < $update_number) {
            echo "the restaurant is full at that time<br/>";
        } else {
            $sql_insert = "INSERT INTO client (email, date, first_name, last_name,  number_people, phone, comment)
            VALUES('$client->email', '$client->date', '$client->first_name', '$client->last_name', '$client->number', '$client->phone' , '$client->comment')";
            if ($conn->query($sql_insert) === TRUE) {
                echo "new client registers<br/>";
                $update_number = $array[0]['number'] + ceil($client->number / 4);
                $array_capacity = $array[0]['capacity'];
                echo "number of tables: $update_number out of $array_capacity<br/>";
                $sql_update = "UPDATE reservations SET number='$update_number' WHERE date= '$client->date'";
                if ($conn->query($sql_update) === TRUE) {
                    echo "Record updated successfully<br/>";
                } else {
                    echo "Error updating record: " . $conn->error . "<br/>";
                }
            } else {
                echo "$client->first_name $client->last_name had already reserved at that time<br/>";
                echo $conn->error . "<br/>";
            }
        }
    }
    $conn->close();

}


function delete_reservation($client){
    echo "------------ Removing client<br/>";

    $conn = OpenCon();

    $sql_delete = "DELETE from client WHERE email='$client->email' AND date='$client->date'";
    if ($conn->query($sql_delete) === TRUE) {
        echo "Reservation deleted successfully<br/>";
    } else {
        echo "Error deleting reservation: " . $conn->error . "<br/>";
    }
    $nbr_table = ceil($client->number / 4);
    $sql_update = "UPDATE reservations SET number = number - $nbr_table WHERE date = '$client->date'";
    if ($conn->query($sql_update) === TRUE) {
        echo "Record updated successfully<br/>";
    } else {
        echo "Error updating record: " . $conn->error . "<br/>";
    }

    $conn->close();

}

?>