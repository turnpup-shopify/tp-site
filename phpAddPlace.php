<?PHP
    $host='localhost';
    $user='alexturn_admin';
    $pwd='kobepro5';
    $db='alexturn_testPassbook';
    $conn=mysql_connect($host,$user,$pwd);
    if($conn) {
        $dbconn = mysql_select_db($db, $conn);
        if(!$dbconn) {
            die('could not connect to database');
        } else {
            $one = "'" . $_GET['name'] . "'";
            $sql = "INSERT INTO testAdventures (adName, adWhere) VALUES ('zPlace'," . $one . ")";
            echo $sql;
            $result = mysql_query($sql) or die(mysql_error());
        }
    } else {
        die("\r\nConnection failed: " . $conn->connect_error);
    }
    $conn->close();
?>