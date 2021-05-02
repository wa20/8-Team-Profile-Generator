
function generateHTML() {

    

return 
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />

    <link rel="stylesheet" href="./style.css" />
    <title>Team profile Generator</title>
  </head>
  <body>
    <header class="navHeader">
        Team Profiles
    </header>

    <section class="mainBody">
    
    ${join.profile.here} 

    </section>

        
 
  </body>
</html>

`
}
module.exports = generateHTML