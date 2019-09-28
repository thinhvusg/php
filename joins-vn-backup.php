<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>MillionInvestment-register</title>
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
    <div class="container col-sm-4">
      <header>MillionInvestment</header>
      <?php
/*
        include 'util.php';
        include 'dbcn.php';
        //get info from the form
        if(($_SERVER['REQUEST_METHOD']=='POST')&&isset($_POST['join'])){
          $fName = $_POST['fName'];
          $lName = $_POST['lName'];
          $email = $_POST['email'];
          $cPhone = $_POST['cPhone'];
          $favPlace = $_POST['fav_place'];
          $nbrMembers = $_POST['members'];
          $refPerson = $_POST['ref_person'];
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
          echo $accId;
          // // insert info to database
          // try{
          //   $sql = "INSERT INTO account (Account_Id, FName, LName, Acc_Pwd, Acc_Email, Acc_Phone, Holded_Members";
          //   $sql .= ", Fav_Place, Spring, Summer, Fall, Winter, Created_Date, First_Ip)";
          //   $sql .= " VALUES ('$accId', '$fName', '$lName', '$pw', '$email', '$cPhone', '$nbrMembers', '$favPlace',";
          //   $sql .= "'$chkSpring', '$chkSummer', '$chkFall', '$chkWinter', '$today', '$ip')";
          //   $conn->exec($sql);
          //   //$conn->commit();
          //   echo "account is added";
          // }
          // //if have errors, catch them
          // catch(PDOException $e){
          //   //$conn->rollBack();
          //   echo "<p class='text-danger'> ERROR: " .$e->getMessage() ."</p>";
          // }
          //
          // $conn = null;

          echo "<p> your info</p>";
          echo "<p>Today is $today </p>";
          echo "<p> fname: ". $fName ."</p>";
          echo "<p> lname: ". $lName ."</p>";
          echo "<p> email: ". $email ."</p>";
          echo "<p> cell phone: ". $cPhone ."</p>";
          echo "<p> favorist places: ". $favPlace ."</p>";
          echo "<p> season: ". $chkSpring . $chkSummer .$chkFall .$chkWinter ."</p>";
          echo $mydate[0];
          echo "<p> account: ". $accId ."</p>";
          echo "<p> pw: ". $pw ."</p>";
          echo "<p> how many members:". $nbrMembers ."</p>";
          echo "<p> Source refer:". $refPerson ."</p>";
          echo "<p> IP addr: ". getUserIpAddr()."</p>";


        }//end first if */
       ?>
      <main>
        <p class="text-info">Vui lòng nhập thông tin của bạn để hệ thống biết ai đã tham gia,
          và thông báo đến bạn khi hệ thống đủ member. Chúng tôi sẽ không bao giờ bán email
          của bạn cho bất kỳ công ty nào.</p><br>
        <form method="POST" acction = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="was-validated">
          <div class="form-group">
            <label for="fName">Tên (*):</label>
            <input type="text" id="fName" name="fName" class="form-control" placeholder="Enter first name" required>
          </div>
          <div class="form-group">
            <label for="lName">Họ (*):</label>
            <input type="text" id="lName" name="lName" class="form-control" placeholder="Enter last name" required>
          </div>
          <div class="form-group">
            <label for="email">Email (*):</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="cPhone"> Cell Phone: Nhập vào dưới dạng ###-###-####</label>
            <input type="tel" id="cPhone" name="cPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      class="form-control" placeholder="###-###-####">
          </div>
          <div class="form-group">
            <label for="fav_place">Bạn sẽ có kế hoạch đi đâu trong 1 or 2 năm tới?
            <span class="text-danger">(chỉ nhập vào bằng tiếng Anh)</span></label>
            <textarea class="form-control" id="fav_place" name="fav_place" rows="2" placeholder="For Example: Destin beach in Florida" required></textarea>
          </div>
          <p> Bạn thích đi vào thời điểm nào? </p><br>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_spring">
              <input type="checkbox" class="form-check-input" id="chk_spring" name="chk_spring" value="Y">Mùa xuân
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_summer">
              <input type="checkbox" class="form-check-input" id="chk_summer" name="chk_summer" value="Y">Mùa hè
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_fall">
              <input type="checkbox" class="form-check-input" id="chk_fall" name="chk_fall" value="Y">Mùa thu
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_winter">
              <input type="checkbox" class="form-check-input" id="chk_winter" name="chk_winter" value="Y">Mùa đông
            </label>
          </div>
          <br><br>
          <div class=form-group>
            <lable for="members">Dự tính có bao nhiêu member dưới account của bạn?
              Tối thiểu la 1 và tối đa là 10 members</label>
              <input type="number" id="members" name="members" min="1" max="10" class="form-control" required>
          </div>
          <div class=form-group>
            <lable for="ref_person">Làm sao bạn biết chương trình này?
              Nhập Account number của người giới thiệu, hoặc tổ chức tôn giáo
              như Chùa, Nhà Thờ hoặc từ Internet</label>
              <input type="text" id="ref_person" name="ref_person" class="form-control">
          </div>
            <input type="submit" id="join" name="join" value="Joins" class="btn btn-primary">
            <input type="reset" class="btn btn-primary">
        </form>
      </main>
      <footer class="text-secondary">
        Copyright &copy; 2019 By MillionInvestment.net <br>
        <a href="mailto:thinhvuaus@gmail.com?subject=feedback">email to thinhvuaus@gmail.com</a>
      </footer>
    </div>
    <script type="text/javascript" src="./js/joins.js">
    </script>
  </body>
</html>
