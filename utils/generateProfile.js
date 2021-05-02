// const profileCard = getElementById('profileCard');

function renderIcon(Icon) {
    if (teamMemebr === "Manager") {
      return "chess king icon";
    } else
    if (teamMemebr === "Engineer") {
        return "chess bishop icon";
    } else 
    if (teamMemebr === "Intern") {
        return "chess pawn icon";
    }
  }


  function renderRole(role) {
    if (teamMemebr === "Manager") {
        return "Manager";
      } else
      if (teamMemebr === "Engineer") {
          return "Engineer";
      } else 
      if (teamMemebr === "Intern") {
          return "Intern";
      }
  }


  
function generateProfile(data) {
  return;
  
  dataArray.map()

`
<li class="card">
    <div class="content">
    <div class="right floated meta">ID: ${data.id}</div>
    <i class="${renderIcon(data.icon)}">${renderRole(data.role)}</i>
        
    </div>

    <div class="image">
    <img src="./assets/male_avatar_sq.svg" />
    </div>
    <div class="content">
    <div class="header">${data.name}</div>
    
    <div class="ui middle aligned animated divided list">
    <div class="item">
    <img class="ui avatar image" src="./assets/email_icon.png" />
    <div class="content">
    <a class="header" href="${data.email}" target="_blank">${data.email}</a>
    </div>
    </div>
    <div class="item">
    <img class="ui avatar image" src="./assets/github-512.png" />
    <div class="content">
    <a class="header" href="${data.gitHubLink}" target="_blank">${data.gitHubLink}</a>
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

module.exports = generateMarkdown;
