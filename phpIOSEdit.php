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
            error_log($_GET["id"] . $_GET["name"]);
            if (isset($_GET["id"]) and !empty($_GET["id"])) {
                $id = $_GET["id"];
                if (isset($_GET["name"]) and !empty($_GET["name"])) {
                    $sql = "UPDATE testAdventures SET adName='" . $_GET['name'] . "' WHERE adId=" . $id;
                    echo $sql;
                    $result = mysql_query($sql) or die(mysql_error());
                }
                if (isset($_GET["summary"]) and !empty($_GET["summary"])) {
                    $sql = "UPDATE testAdventures SET adSummary='" . $_GET['summary'] . "' WHERE adId=" . $id;
                    $result = mysql_query($sql) or die(mysql_error());
                }
                if (isset($_GET["when"]) and !empty($_GET["when"])) {
                    $sql = "UPDATE testAdventures SET adWhen='" . $_GET['when'] . "' WHERE adId=" . $id;
                    $result = mysql_query($sql) or die(mysql_error());
                }
                if (isset($_GET["where"]) and !empty($_GET["where"])) {
                    $sql = "UPDATE testAdventures SET adWhere='" . $_GET['where'] . "' WHERE adId=" . $id;
                    $result = mysql_query($sql) or die(mysql_error());
                }
            } else {
                exit("no id supplied");
            }
        }
    } else {
        die("\r\nConnection failed: " . $conn->connect_error);
    }
    $conn->close();
?>
<!-- http://alexturney.com/phpIOSEdit.php?id=4&name=ballsohardmotha -->