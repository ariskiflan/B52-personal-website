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

  // const technologies = document.getElementsByName("Technologies");
  // let technology = [];
  // for (let i = 0; i < technologies.length; i++) {
  //   if (technologies[i].checked) {
  //     // console.log(technology[i].value);
  //     technology.push(technologies[i].value);
  //   }
  // }

  let image = document.getElementById("file-img").files;
  image = URL.createObjectURL(image[0]);

  const project = {
    projectName,
    startDate,
    endDate,
    description,
    nodeJs,
    reactJs,
    angularJs,
    java,
    image,
  };

  projects.unshift(project);
  renderMyProject();

  console.log(projects);

  const detailProject = document.querySelector(".detail-container");
  const detailImage = document.querySelectorAll(".list-img");
  const overlay = document.querySelector(".overlay");
  const btnDetailClose = document.querySelector(".close-detail");

  const openDetail = function () {
    detailProject.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeDetail = function () {
    detailProject.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  for (let i = 0; i < detailImage.length; i++) {
    detailImage[i].addEventListener("click", openDetail);
  }

  btnDetailClose.addEventListener("click", closeDetail);
  overlay.addEventListener("click", closeDetail);
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
          <img src="${projects[i].image}" alt="" class="list-img" />
          <h3 class="list-project-title">${projects[i].projectName}</h3>
          <p class="list-project-duration">
            Duration: ${projects[i].startDate} - ${projects[i].endDate}
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

// btnCloseModal.addEventListener("click", closeModal);
