<html>
    <head>
        <style>
            .test {
                src: "data/fleekPhotos/1.jpg";
            }
        </style>
    </head>
    <body>
        <?php
            require '../.htpasswds/connect.php';
            mysql_select_db("alexturn_fleekDB") or die(mysql_error());
            $strSQL = "SELECT * FROM Product_Data";
            $rs = mysql_query($strSQL);
            $firstRow = mysql_fetch_row($rs);
            // Close the database connection
        ?>
        <img src="<?php echo $firstRow[3];?>"  width="500px">
        <p> This is the user's first name: <?php echo $firstRow[1]; ?></p>
        <p> This is the user's last name: <?php echo $firstRow[2]; ?></p>
        <p> This is the user's email: <?php echo $firstRow[3]; ?></p>
    </body>
</html>
