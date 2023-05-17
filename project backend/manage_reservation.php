<?php
function init_day($day)
{
    echo "------------ Initialise day<br/>";

    $conn = OpenCon();
    $sql_select = "select * from reservations where date = '$day 11:00:00'";

    $result = mysqli_query($conn, $sql_select);
    $array = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $array[] = $row;
    }

    if (empty($array)) {
        for ($hour = 11; $hour < 16; $hour++) {
            $sql_insert = "INSERT INTO reservations(date, capacity, number) VALUES ('$day $hour:00:00', '10', '0')";
            if ($conn->query($sql_insert) === TRUE) {
                echo "reservation for $day $hour:00:00 open<br/>";
            }
            else 
            {
                echo "ERROR: $conn->error";
            }
        }
    
        for ($hour = 18; $hour < 22; $hour++) {
            $sql_insert = "INSERT INTO reservations(date, capacity, number) VALUES ('$day $hour:00:00', '20', '0')";
            if ($conn->query($sql_insert) === TRUE) {
                echo "reservation for $day $hour:00:00 open<br/>";
            }
            else 
            {
                echo "ERROR: $conn->error <br/>";
            }
        }
    }
    else
    {
        echo "The restaurant is already open that day and the reservation are already open !<br/>";
    }

    $conn->close();

}


function flush_all_reservation(){
    $conn = OpenCon();
    echo "------------ FLUSHING<br/>";

    $sql_update = "UPDATE reservations SET number='0'";
    if ($conn->query($sql_update) === TRUE) {
        echo "Reservations flushed successfully<br/>";
    } else {
        echo "Error flushing reservations: " . $conn->error . "<br/>";
    }

    $sql_update = "DELETE from client";
    if ($conn->query($sql_update) === TRUE) {
        echo "Clients deleted successfully<br/>";
    } else {
        echo "Error deleting client: " . $conn->error . "<br/>";
    }

    $conn->close();

}



?>