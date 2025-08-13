<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
//if we got something through $_POST
if (isset($_POST['search'])) {
    // here you would normally include some database connection
    require '../.htpasswds/connect.php';
    mysql_select_db("alexturn_fleekDB") or die(mysql_error());
    // never trust what user wrote! We must ALWAYS sanitize user input
    $word = mysql_real_escape_string($_POST['search']);
    $word = htmlentities($word);
    // build your search query to the database
    $strSQL = "SELECT PD.Path, PD.Name FROM Product_Data as PD WHERE PD.Name LIKE '%" . $word . "%'";
    // get results
    $rs = mysql_query($strSQL);
    $yourArray = array(); // make a new array to hold all your data


    $index = 0;
    while($row = mysql_fetch_row($rs)){ // loop to store the data in an associative array.
         $yourArray[$index] = $row;
         $index++;
    }
    // echo($yourArray);
    echo json_encode($yourArray);
}
?>
