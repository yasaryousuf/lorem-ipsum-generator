

let generateButton = document.querySelector('.generate-btn');
let type = document.querySelector('[name="type"]');
let paras = document.querySelector('[name="paras"]');
let sentences = document.querySelector('[name="sentences"]');
let format = document.querySelector('[name="format"]');


type.addEventListener("change", function(e){
  alert(e.target.value);
});

generateButton.addEventListener("click", function(e){
  e.preventDefault();
  let url = "https://baconipsum.com/api/";

  let params = {
    "paras" : '3',  
    "sentences" : '',
    "format": 'html',
    "type": 'meat-and-filler',
    "start-with-lorem": ''
  };

  let urlParam = new URLSearchParams(params);
  urlParam = urlParam.toString();

  axios.get(url, {
      params: params
    })
    .then(function (response) {
      console.log(response.data);
      document.getElementById("textarea").value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});