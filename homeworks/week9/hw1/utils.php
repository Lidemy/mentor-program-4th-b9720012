<?php
  require_once('conn.php');

  function getUserFromUsername($username) {
    global $conn;    
    $sql = sprintf(
      "SELECT * FROM b9720012_Week9_users WHERE username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row; // username, id, nickname
  }
?>