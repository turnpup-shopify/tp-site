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
            if (isset($_GET['where']) and !empty($_GET["where"])) {
                $where = $_GET["where"];
                $where = str_replace("%20", " ", $where);
                $sql = "DELETE FROM testAdventures WHERE adWhere='".$where."'";
                $result = mysql_query($sql,$conn) or die(mysql_error());
                echo $result;
            } else {
                die('invalid id parameter...');
            }
        }
    } else {
        die("Connection failed...");
    }
    $conn->close();
?>