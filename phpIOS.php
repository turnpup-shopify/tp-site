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
            if (isset($_GET["summary"]) and !empty($_GET["summary"])) {
                $two = "'" . $_GET["summary"] . "'";
            } else {
                $two = "NULL";
            }
            if (isset($_GET["when"]) and !empty($_GET["when"])) {
                $three = "'" . $_GET["when"] . "'";
            } else {
                $three = "NULL";
            }
            if (isset($_GET["where"]) and !empty($_GET["where"])) {
                $four = "'" . $_GET["where"] . "'";
            } else {
                $four = "NULL";
            }
            if (isset($_GET["user"]) and !empty($_GET["user"])) {
                $five = "'" . $_GET["user"] . "'";
            } else {
                $five = "NULL";
            }
            $sql = "INSERT INTO testAdventures (adName,adSummary,adWhen,adWhere,user) VALUES (" . $one . "," . $two . "," . $three . "," . $four . "," . $five . ")";
            echo $sql;
            $result = mysql_query($sql) or die(mysql_error());
        }
    } else {
        die("\r\nConnection failed: " . $conn->connect_error);
    }
    $conn->close();
?>