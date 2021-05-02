// const profileCard = getElementById('profileCard');

// function renderIcon(Icon) {
//     if (teamMemebr === "Manager") {
//       return "chess king icon";
//     } else
//     if (teamMemebr === "Engineer") {
//         return "chess bishop icon";
//     } else 
//     if (teamMemebr === "Intern") {
//         return "chess pawn icon";
//     }
//   }


//   function renderRole(role) {
//     if (teamMemebr === "Manager") {
//         return "Manager";
//       } else
//       if (teamMemebr === "Engineer") {
//           return "Engineer";
//       } else 
//       if (teamMemebr === "Intern") {
//           return "Intern";
//       }
//   }

function generateTeamHtml(team) {



    function generateManagerHtmlProfile(manager) {
      return
  
    `
    <li class="card">
        <div class="content">
        <div class="right floated meta">ID: ${data.id}</div>
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
        <img class="ui avatar image" src="" />
        <div class="content">
        <div class="header" >${manger.getOfficeNumber()}</div>
        </div>
        </div>
        </div>
        </div>
    
        <div class="extra content">
        <span class="right floated">Joined in ${data.dateJoined}</span>
        </div>
    </li>
    `;
    }

    const htmlStrings = []; 

    htmlStrings.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHtmlProfile(manager)))
}
  

module.exports = team => {
    return `return 
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
        
        ${generateTeamHtml(team)} 
    
        </section>
    
            
     
      </body>
    </html>
    
    `
    }`
};
