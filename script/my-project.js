const projects = [];

function addProject(e) {
  e.preventDefault();

  const projectName = document.getElementById("project-name").value;
  const startDate = document.getElementById("project-start-date").value;
  const endDate = document.getElementById("project-end-date").value;
  const description = document.getElementById("textarea").value;
  const nodeJs = document.getElementById("nodejs").checked;
  const reactJs = document.getElementById("reactjs").checked;
  const angularJs = document.getElementById("angularjs").checked;
  const java = document.getElementById("java").checked;

  let image = document.getElementById("file-img").files;
  image = URL.createObjectURL(image[0]);

  const dateOne = new Date(startDate);
  const dateTwo = new Date(endDate);
  const time = Math.abs(dateTwo - dateOne);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(time / (1000 * 60 * 60 * 24) / 365);

  let distance = [];

  if (days < 24) {
    distance += days + " Days";
  } else if (months < 12) {
    distance += months + " Month";
  } else if (years < 365) {
    distance += years + " Years";
  }

  const project = {
    projectName,
    startDate,
    endDate,
    description,
    nodeJs,
    reactJs,
    angularJs,
    java,
    distance,
    image,
  };

  projects.unshift(project);
  renderMyProject();

  document.querySelector("form").reset();
}

function renderMyProject() {
  let html = "";

  for (let i = 0; i < projects.length; i++) {
    let renderIcon = "";
    if (projects[i].nodeJs) {
      renderIcon += `<i class="fa-brands fa-node"></i>`;
    }
    if (projects[i].reactJs) {
      renderIcon += `<i class="ri-reactjs-line"></i>`;
    }
    if (projects[i].angularJs) {
      renderIcon += `<i class="fa-brands fa-angular"></i>`;
    }
    if (projects[i].java) {
      renderIcon += `<i class="fa-brands fa-java"></i>`;
    }

    html += `    
        <div class="box">
          <a href="detail-project.html">
            <img src="${projects[i].image}" alt="" class="list-img" />
          </a>
          <h3 class="list-project-title">${projects[i].projectName}</h3>
          <p class="list-project-duration">
            Duration: ${projects[i].distance}
          </p>
          <p class="list-project-description">${projects[i].description} </p>

          <div class="list-icon">
            ${renderIcon}
          </div>

          <div class="button-box">
            <button type="submit" class="list-btn">Edit</button>
            <button type="submit" class="list-btn">Delete</button>
          </div>
        </div>   
    `;
  }

  document.querySelector(".list-box").innerHTML = html;
}

renderMyProject();
