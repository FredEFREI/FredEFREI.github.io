<?php

class Client {
    public $first_name;
    public $last_name;
    public $date;
    public $email;
    public $phone;
    public $number;
    public $comment;

    function __construct($first_name, $last_name, $date, $email, $phone, $number, $comment){
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->date = $date;
        $this->email = $email;
        $this->number = $number;
        $this->phone = $phone;
        $this->comment = $comment;
    }

    function print_info(){
        echo("First name: $this->first_name<br/>
        Last name: $this->last_name<br/>
        Date for reservation: $this->date<br/>
        Email: $this->email<br/>
        Phone: $this->phone<br/>
        Number of person: $this->number<br/>
        Comment: $this->comment<br/>");
    }
}

?>