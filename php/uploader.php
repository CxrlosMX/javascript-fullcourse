<?php
// echo "hello, response from the server";

// var_dump($_FILES);

if (isset($_FILES["file"])) {
    $name=$_FILES["file"]["name"];
    $file=$_FILES["file"]["tmp_name"];
    $error=$_FILES["file"]["error"];
    $destination="/files/name";
    $upload=move_uploaded_file($file,$destination);

    if ($upload) {
        # code...
        $res=array(
            "err" =>false,
            "status"=> http_response_code(200),
            "statusText" =>"File $name uploaded successfully",
            "files" =>$_FILES["file"]
        );
    }
    else {
        $res=array(
            "err" =>true,
            "status"=> http_response_code(400),
            "statusText" =>"Error uploading file: $name",
            "files" =>$_FILES["file"]
        ); 
    }
    echo json_encode($res);
}