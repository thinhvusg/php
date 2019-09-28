<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>MillionInvestment-Process</title>
    <meta charset="utf-8">
    <meta name="viewport" content="with=device-width, initial-scale=1">
<!-- link to Bootrap 4 CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="intro.css">
  </head>
  <body>
    <div class="container col-sm-6">
      <header>MillionInvestment</header>
      <main>
        <?php
          include 'util.php';
          include '../dbcn.php';
          //get info from the form
          if(($_SERVER['REQUEST_METHOD']=='POST')&&isset($_POST['join'])){
            $fName = $_POST['fName'];
            $lName = $_POST['lName'];
            $email = $_POST['email'];
            $cPhone = $_POST['cPhone'];
            $favPlace = $_POST['fav_place'];
            $nbrMembers = $_POST['members'];
            $refPerson = $_POST['ref_person'];
            if($refPerson == '') $refPerson = 'T1108091';
            //check some info before put in DB
            if ($cPhone == '') $cPhone = '';
            if (isset($_POST['chk_spring'])) $chkSpring = $_POST['chk_spring'];
            else $chkSpring ='N';
            if (isset($_POST['chk_summer'])) $chkSummer = $_POST['chk_summer'];
            else $chkSummer = 'N';
            if (isset($_POST['chk_fall'])) $chkFall = $_POST['chk_fall'];
            else $chkFall = 'N';
            if (isset($_POST['chk_winter'])) $chkWinter = $_POST['chk_winter'];
            else $chkWinter = 'N';
            //create a account number and pass
            $mydate = getdate();
            $accId = substr($fName,0,1);
            $accId .= strval($mydate[0] - 1562400000);
            //get date of today
            $today = date('Y-m-d');
            //create temp password
            $pw = '';
            for($i = 0; $i < 8; $i++){
              $code = mt_rand(33,122);
              $pw .= chr($code);
            }
            $ip = getUserIpAddr(); //get IP addr
            echo "<article class='slideshow'>";
            $found = false;
            //prevent refresh page to insert one more record, find email is in DB or not
            $stmt = "SELECT Acc_Email FROM account WHERE Acc_Email = '$email'";
            if($result = $conn->query($stmt)){
              if($result->fetchColumn()){ //if email is found, print errors
                echo "<p class='text-danger'> Account' email is existed Or this page is refreshed.<br>
                      Please click << Joins with a new account >> </p>";
                $found = true;
              }
              if(!$found){ //email is not found
                //insert info to database
                try {
                  $sql = "INSERT INTO account (Account_Id, FName, LName, Acc_Pwd, Acc_Email, Acc_Phone, Holded_Members";
                  $sql .= ", Fav_Place, Spring, Summer, Fall, Winter, Created_Date, First_Ip)";
                  $sql .= " VALUES ('$accId', '$fName', '$lName', '$pw', '$email', '$cPhone', '$nbrMembers', '$favPlace',";
                  $sql .= "'$chkSpring', '$chkSummer', '$chkFall', '$chkWinter', '$today', '$ip')";
                  $conn->exec($sql);
                } catch(PDOException $e2){
                  //$conn->rollBack();
                  echo "<p class='text-danger'> ERROR: " .$e2->getMessage() ."</p>";
                }
                  //print out message
                  echo "<h2 class='text-center text-primary'>THANK YOU! YOU JOINED SUCCESSFULLY</h2>";
                  echo "<p class='done-txt'>If there are enough members, you will be one of owners of Condos like pictures.</P>";
                  //must set image style width 100% to overlap css style
                  echo "<img class='mx-auto d-block rounded' src='images/index-images/destin.jpg' id='pics' style='width:100%; height:auto;'></img>";
                  echo "<p class='done-txt'> The web is still under construction. We will send e-mails about your";
                  echo " login account as well as improtant emails when the syste reach out number of needed member</p>";

              }
            }

          }//end first if



            // echo "<p> your info</p>";
            // echo "<p>Today is $today </p>";
            // echo "<p> fname: ". $fName ."</p>";
            // echo "<p> lname: ". $lName ."</p>";
            // echo "<p> email: ". $email ."</p>";
            // echo "<p> cell phone: ". $cPhone ."</p>";
            // echo "<p> favorist places: ". $favPlace ."</p>";
            // echo "<p> season: ". $chkSpring . $chkSummer .$chkFall .$chkWinter ."</p>";
            // echo $mydate[0];
            // echo "<p> account: ". $accId ."</p>";
            // echo "<p> pw: ". $pw ."</p>";
            // echo "<p> how many members:". $nbrMembers ."</p>";
            // echo "<p> Source refer:". $refPerson ."</p>";
            // echo "<p> IP addr: ". getUserIpAddr()."</p>";


            //print out joined members
            try{
              $stmt = "SELECT SUM(Holded_Members) AS total FROM account";

              //if ($result->num_rows > 0){
                foreach($conn->query($stmt) AS $info){
                  echo "<p class='report-txt'>".$info['total'] ." members joined </p>";
                }
            //  }
            }catch (PDOException $e){
              echo "<p class='text-danger'> ERROR: " .$e->getMessage() ."</p>";
            }

            echo "</article>";
            $conn = null;
         ?>
         <div class="mx-auto d-block">
           <a href="joins-vn.php"><< Joins with a new account >></a>
         </div>
      </main>
      <footer class="text-secondary">
        Copyright &copy; 2019 By MillionInvestment.net <br>
        <a href="mailto:thinhvusg@gmail.com?subject=feedback">email to thinhvusg@gmail.com</a>
      </footer>
    </div>
    <script type="text/javascript" src="./js/joins.js">
    </script>
  </body>
</html>
