function generateProfile(data) {
  return;

  `
    <li class="card">
    <div class="content">
      <div class="right floated meta">ID:</div>
      <i class="chess king icon ${data.icon}"></i>
     
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
    <span class="right floated">${data.dateJoined}</span>
     </div>
        </li>
    `;
}

module.exports = generateMarkdown;
