<html>
  <head>
    <title>
      Your Result
    </title>
  </head>
  <body>
    <center>
      <?php
        if($_POST["level"]==10){
      ?>
      <p>
        You Are spooky Enough <br>
        Enjoy Spooktober to the fullest
      </p>
      <?php
      }else if($_POST["level"]>10){
      ?>
      <h2>
        HOLD on There Fella<br>
        You are too spooky to be allowed to surf the inter webs<br>
        VERY HIGH SPOOK LEVELS<br>
      </h2>
      <img src="https://media.giphy.com/media/WrgAGkGrh0MD1Z2gkO/source.gif"></img>
      <?php
        }else if($_POST["level"]<10 && $_POST["level"]>=0){
      ?>
      <h2>
        You seem to be good<br>
        Enjoy spooktober, Friend !!!<br>
        MODERATE SPOOK LEVELS<br>
        <img src="https://media.giphy.com/media/11ISwbgCxEzMyY/source.gif"></img>

      </h2>
      <?php
        }else{
      ?>
      <h2>
        Dont pull a fast one on me Boi<br>
        Enter a VALID INPUT<br>
        UNIDENTIFIED SPOOK LEVELS<br>
        <img src="https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/source.gif"></img>

      </h2>
      <?php
        }
      ?>
    </center>
  </body>
</html>
