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
            if (isset($_GET["where"]) and !empty($_GET["where"])) {
                $where = $_GET["where"];
                $where = str_replace("%20", " ", $where);
                $sql = "SELECT * FROM testAdventures WHERE adWhere='".$where."'";
                $resultSet = mysql_query($sql, $conn);
                $results = array();
                while ($r = mysql_fetch_assoc($resultSet)) {
                    $results[] = $r;
                }
                echo json_encode($results);
            }
        }
    } else {
        die("Connection failed...");
    }
    $conn->close();
?>