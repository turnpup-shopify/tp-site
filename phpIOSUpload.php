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
            error_log("received the name " . $_POST["name"] . "     received files: ");
            if (isset($_POST["name"]) and !empty($_POST["name"])) {
                error_log($_FILES);
                if (!empty($_FILES["file"]["name"])) {
                    $target_dir = "memImages";
                    $target_dir = $target_dir . "/" . basename($_FILES["file"]["name"]);
                    $filepath = str_replace("%20", "_", $target_dir);
                    if (move_uploaded_file($_FILES["file"]["tmp_name"],  $filepath)) {
                            error_log("made it here before json encode");
                            echo json_encode(array("Message" => "The file ". basename( $_FILES["file"]["name"]) . " has been uploaded.", "Status" => "OK"));
                    } else {
                            echo json_encode(array("Message" => "Sorry, there was an error uploading your file.", "Status" => "Error"));
                    }
                }
                $name = $_POST["name"];
                $sql = "UPDATE testAdventures SET adPath='" . $filepath . "' WHERE adName='" . str_replace("%20", " ", $name) . "'";
                error_log($sql);
                $result = mysql_query($sql) or die(mysql_error());
            } else {
                error_log("made it and failed here");
                exit("no name supplied");
            }
        }
    } else {
        die("\r\nConnection failed: " . $conn->connect_error);
    }
    $conn->close();
?>