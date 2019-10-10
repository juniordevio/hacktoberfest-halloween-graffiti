<html>
  <head>
    <!--BOOTSTRAP CDN-->
    		<link rel="stylesheet" href="styles.css">
    <!--BOOTSTRAP SCRIPTS-->
    		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div>
    <span class="ghost1">
    <img src="https://media.giphy.com/media/YARUMKaGd8cRG/giphy.gif"></img>
    </span>
    <span class="ghost2">
    <img src="https://media.giphy.com/media/YARUMKaGd8cRG/giphy.gif"></img>
    </span>
    </div>
    <center>
      <h1>
        Are_yOu_SpOoKy_EnOugh?.html
      </h1>
      <!--Testing loops with html elements-->
      <?php
        for($i=0;$i<8;$i++){
      ?>
          <br>
      <?php
        }
      ?>

      <form action="display.php" method="post">
        <div class="form-group">
          <label for="level"><h4> Enter the current Spookyness level O_o </h4></label>
          <input type="number" id="level" placeholder="Enter 1-10" name="level">
        </div>
      </form>
    </center>
  </body>
</html>
