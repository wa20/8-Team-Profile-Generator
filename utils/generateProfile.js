//generate html

function generateTeamHtml(team) {

   const htmlStrings = []; 

    function generateManagerHtmlProfile(manager) {
        console.log(manager)
      return `
    <li class="card">
        <div class="content">
        <div class="right floated meta">ID: ${manager.id}</div>
        <i class="${manager.getIcon()}">${manager.getRole()}</i>
            
        </div>
    
        <div class="image">
        <img src="./assets/male_avatar_sq.svg" />
        </div>
        <div class="content">
        <div class="header">${manager.getName()}</div>
        
        <div class="ui middle aligned animated divided list">
        <div class="item">
        <img class="ui avatar image" src="./assets/email_icon.png" />
        <div class="content">
        <a class="header" href="${manager.getEmail()}" target="_blank">${manager.getEmail()}</a>
        </div>
        </div>
        <div class="item">
        <img class="ui avatar image" src="./assets/phone_icon.png" />
        <div class="content">
        <div class="header" >${manager.getOfficeNumber()}</div>
        </div>
        </div>
        </div>
        </div>
    
        <div class="extra content">
        <span class="right floated">${manager.getYearJoined()}</span>
        </div>
    </li>
    `;
    }

    htmlStrings.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHtmlProfile(manager)))


    function generateEngineerHtmlProfile(engineer) {
      console.log(engineer)
      return `
    <li class="card">
        <div class="content">
        <div class="right floated meta">ID: ${engineer.id}</div>
        <i class="${engineer.getIcon()}">${engineer.getRole()}</i>
            
        </div>
    
        <div class="image">
        <img src="./assets/male_avatar_sq.svg" />
        </div>
        <div class="content">
        <div class="header">${engineer.getName()}</div>
        
        <div class="ui middle aligned animated divided list">
        <div class="item">
        <img class="ui avatar image" src="./assets/email_icon.png" />
        <div class="content">
        <a class="header" href="${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a>
        </div>
        </div>
        <div class="item">
                <img class="ui avatar image" src="./assets/github-512.png" />
                <div class="content">
                  <a class="header" href="${engineer.githubLink}" target="_blank">${engineer.githubLink}</a>
                </div>
            </div>
        </div>
        </div>
    
        <div class="extra content">
        <span class="right floated">${engineer.yearJoined}</span>
        </div>
    </li>
    `;
    }

    htmlStrings.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineerHtmlProfile(engineer)))

    function generateInternHtmlProfile(intern) {
      // console.log(engineer)
      return `
    <li class="card">
        <div class="content">
        <div class="right floated meta">ID: ${intern.id}</div>
        <i class="${intern.getIcon()}">${intern.getRole()}</i>
            
        </div>
    
        <div class="image">
        <img src="./assets/male_avatar_sq.svg" />
        </div>
        <div class="content">
        <div class="header">${intern.getName()}</div>
        
        <div class="ui middle aligned animated divided list">
        <div class="item">
        <img class="ui avatar image" src="./assets/email_icon.png" />
        <div class="content">
        <a class="header" href="${intern.getEmail()}" target="_blank">${intern.getEmail()}</a>
        </div>
        </div>
        <div class="item">
                <img class="ui avatar image" src="./assets/github-512.png" />
                <div class="content">
                  <a class="header" href="${intern.getGithubLink()}" target="_blank">${intern.getGithubLink()}</a>
                </div>
            </div>
        </div>
        </div>
    
        <div class="extra content">
        <span class="right floated">${intern.yearJoined}</span>
        </div>
    </li>
    `;
    }

    htmlStrings.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateInternHtmlProfile(intern)))

    return htmlStrings.join("")



}
  

module.exports = team => {
    console.log(team)
    return `
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
        
        ${generateTeamHtml(team)} 
    
        </section>
    
            
     
      </body>
    </html>
    
    `
};
