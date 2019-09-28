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
          include("../dbcn.php");
          echo "<article class='slideshow'>";
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
       ?>

      <main>
        <p class="text-info">Please enter your infomation to join, and the system will send you
         updated email when we have enough members. We never sell your info to any third party</p><br>
        <form method="POST" action="jprocess-en.php" class="was-validated">
          <div class="form-group">
            <label for="fName">First Name (*):</label>
            <input type="text" id="fName" name="fName" class="form-control" placeholder="Enter first name" required>
          </div>
          <div class="form-group">
            <label for="lName">Last Name (*):</label>
            <input type="text" id="lName" name="lName" class="form-control" placeholder="Enter last name" required>
          </div>
          <div class="form-group">
            <label for="email">Email (*):</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="cPhone"> Cell Phone: Enter in form ###-###-####</label>
            <input type="tel" id="cPhone" name="cPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      class="form-control" placeholder="###-###-####">
          </div>
          <div class="form-group">
            <label for="fav_place">Where would you like to go in next year or 2 years?
            <span class="text-danger">(separate place with commas)</span></label>
            <textarea class="form-control" id="fav_place" name="fav_place" rows="2" placeholder="For Example: Destin beach in Florida" required></textarea>
          </div>
          <p> What season would you like to go? </p><br>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_spring">
              <input type="checkbox" class="form-check-input" id="chk_spring" name="chk_spring" value="Y">Spring
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_summer">
              <input type="checkbox" class="form-check-input" id="chk_summer" name="chk_summer" value="Y">Summer
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_fall">
              <input type="checkbox" class="form-check-input" id="chk_fall" name="chk_fall" value="Y">Fall
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="chk_winter">
              <input type="checkbox" class="form-check-input" id="chk_winter" name="chk_winter" value="Y">Winter
            </label>
          </div>
          <br><br>
          <div class=form-group>
            <lable for="members">How many members under your account?
              Min is 1 and Max is 10 members</label>
              <input type="number" id="members" name="members" min="1" max="10" class="form-control" required>
          </div>
          <div class=form-group>
            <lable for="ref_person">How you know this program?
              Enter Id of referred person, organizaions like
              Church, Temple, or Internet</label>
              <input type="text" id="ref_person" name="ref_person" class="form-control">
          </div>
            <input type="submit" id="join" name="join" value="Joins" class="btn btn-primary">
            <input type="reset" class="btn btn-primary">
        </form>
      </main>
      <footer class="text-secondary">
        Copyright &copy; 2019 By MillionInvestment.net <br>
        <a href="mailto:thinhvusg@gmail.com?subject=feedback">email to thinhvusg@gmail.com</a>
      </footer>
    </div>
  </body>
</html>
