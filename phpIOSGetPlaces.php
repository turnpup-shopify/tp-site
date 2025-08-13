<?PHP
    require '../.htpasswds/connect_pb.php';
    $db='alexturn_testPassbook';
    $dbconn = mysql_select_db($db);
    if(!$dbconn) {
        die('could not connect to database');
    } else {
        $sql = "SELECT DISTINCT adWhere FROM testAdventures";
        $resultSet = mysql_query($sql);
        $results = array();
        while ($r = mysql_fetch_assoc($resultSet)) {
            $results[] = $r;
        }
        echo json_encode($results);
    }
?>