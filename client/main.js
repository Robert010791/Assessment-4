console.log('hello world');
//
//
//
//
document.getElementById('fortuneButton').onclick = function () {
  axios.get('http://localhost:4000/api/fortune/').then(function (response) {
    const data = response.data;
    alert(data);
  });
};
const videoContainer = document.querySelector('.video-container');
//
//
//
//
document.getElementById('videoButton').onclick = function () {
  axios.get('http://localhost:4000/api/video/').then(function (response) {
    const data = response.data;
    console.log(data);
    const videoCard = document.createElement('div');
    videoCard.innerHTML = `<a class="songBtn" href="${data}" target="_blank">Motivational song!</a> `;

    console.log(videoCard);
    videoContainer.appendChild(videoCard);
  });
};
//
///
//
//
//
///
//
///
///
///
//

const resourceContainer = document.querySelector('.resource-links');

function createResourceCard(resource) {
  const resourceCard = document.createElement('div');
  resourceCard.classList.add('resource-card');

  resourceCard.innerHTML = `<a class="resourceBtns" href="${resource.linkURL}" target="_blank">${resource.resourceName}</a>`;

  resourceContainer.appendChild(resourceCard);
}

const resourceCallBack = ({ data: resources }) => displayResources(resources);
//
//
//
//
//

document.getElementById('resourceButton').onclick = function () {
  axios.get('http://localhost:4000/api/resource/').then(resourceCallBack);
};
//
//

function displayResources(arr) {
  resourceContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createResourceCard(arr[i]);
  }
}
//
//
//
//

let button1 = document.querySelector('.submitBtn');
button1.onclick = function () {
  console.log('Hello');
};
//
///
//
///
//
///
//

const addResource = (body) =>
  axios.post('http://localhost:4000/api/resource', body).then(resourceCallBack);

function submitButton(e) {
  e.preventDefault();

  let resourceName = document.getElementById('link-name');
  let linkURL = document.getElementById('link-url');

  let resourceObject = {
    resourceName: resourceName.value,
    linkURL: linkURL.value,
  };
  addResource(resourceObject);
  resourceName.value = '';
  linkURL.value = '';
}

const form = document.querySelector('form');

form.addEventListener('submit', submitButton);
