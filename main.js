/*function loadjson(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	};
xhr.send(null);
}
loadjson("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
})*/
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
		if(response.ok){
			resolve(response.json());
		}else{
			reject(new Error("error"));
		}
	})
})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
})

var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src="Hydrangeas.jpg";
	img.alt="picture";
	ch.appendChild(img);
	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:kavyamasavapu91@gmail.com";
	email.textContent="kavyamasavarapu91@gmail.com";
	ch.appendChild(email);
	var ad=document.createElement("p");
	ad.textContent=det.address;
	ch.appendChild(ad);
	var ph=document.createElement("h3");
	ph.textContent=det.mobile;
	ch.appendChild(ph);
}
var ch2=document.querySelector(".child2");
function careerinfo(info){
	var h1=document.createElement("h2");
	h1.textContent="career objective";
	ch2.appendChild(h1);
	var c=document.createElement("h4");
	c.textContent=info.cb;
	ch2.appendChild(c);
}
