<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mike Silverman</title>
<link rel="icon" href="https://image.flaticon.com/icons/svg/106/106842.svg">
<link rel="stylesheet" href="style.css" type="text/css" media="screen">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=glyph:300,400,600,700&amp;lang=en" />
</head>
<body>
  <div id="introDiv">
    <div id="topMenu">
      <ul>
        <li class="topMenuLink">
          <a href="#introDiv">Top</a>
        </li>
        <li class="topMenuLink">
          <a href="#midDiv">Projects</a>
        </li>
        <li class="topMenuLink">
          <a href="#botDiv">Contact</a>
        </li>
      </ul>
    </div>
    <div id="introDivText">
    <h1>Hi, I'm Mike</h1>
    <h3>This is my landing page</h3>
    <a class="button transparentButton" href="#midDiv">Lets go</a>
    </div>
  </div>

  <div id="midDiv">
    <div id="projectsHeader">
      <h2 id="projectsLabel">
        Projects
      </h2>
    </div>
    <div id="projectsFlexContainer">
      <div class="projectBox" id="project1">
        <h3>React RPG</h3>
        <div class="projecBoxText" id="desc1">
          <p>Defeat monsters, collect loot.</p>
        </div>
      </div>
      <div class="projectBox" id="project2">
        <h3>Other Project</h3>
        <div class="projecBoxText" id="desc2">
          <p>A future project...</p>
        </div>
      </div>
      <div class="projectBox" id="project3">
        <h3>Placeholder</h3>
        <div class="projecBoxText" id="desc3">
          <p>Use your imagination.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="botDiv">
    <div id="contactHeader">
      <h2 id="contactLabel">
        Contact
      </h2>
    </div>
    <form id="contactForm" action="contactForm.php" method="post">
      <input class="contactInput" name="name" type="text" required placeholder="Name"/>
      <input class="contactInput" name="email" type="email" required placeholder="Email"/>
      <textarea class="contactInput" name="message" id="contactText" placeholder="Message"></textarea>
      <button class="button transparentButton" name="submit" id="formSubmit" type="submit">Send</i></button>
    </form>
  </div>

  <footer id="footerDiv">
    <p>michael.p.silverman@gmail.com</p>
    <div id="socialButtonHolder">
      <a class="socialButton" id="instagram" href="https://www.instagram.com/michaelpsilverman/" target="_blank">
      <i class="fab fa-instagram"></i>
      </a>
      <a class="socialButton" id="facebook" href="https://www.facebook.com/michael.p.silverman" target="_blank">
      <i class="fab fa-facebook"></i>
      </a>
      <a class="socialButton" id="github" href="https://github.com/SnowdenWintermute" target="_blank">
      <i class="fab fa-github"></i>
      </a>
      <a class="socialButton" id="linkedin" href="https://www.linkedin.com/in/michael-silverman-8a854610/" target="_blank">
      <i class="fab fa-linkedin"></i>
      </a>
    </div>
    </div>
  </footer>
</body>
</html>