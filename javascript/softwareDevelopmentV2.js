//Not Finished
var codeSnippets = document.getElementsByClassName('selectCode'),
    length = codeSnippets.length,
    i;

for (i = 0; i < length; i++) {
  
  var code = codeSnippets[i].innerHTML,
      node = document.createTextNode(code);
  
  codeSnippets[i].innerHTML = '';
  codeSnippets[i].appendChild(node);
}


//function used to copy code to the clipboard

const copyToClipboard = async () => {

    try {
      var element = document.querySelector(".selectCode");
      await navigator.clipboard.writeText(element.textContent);
      console.log("Text copied to clipboard!");
      console.log(navigator.clipboard.read.length);
      // Optional: Display a success message to the user
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Optional: Display an error message to the user
    }
  };



  function typeWriter(text, elementId, delay) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}



document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.remove('hidden');
                typeWriter("Software Development", "typewriter", 300);
                // typeWriter("Vision System", "typewriter2", 300);
                observer.unobserve(element);
            }
        });
    });

    const target = document.getElementById('typewriter');
    // const target2 =document.getElementById('typewriter2');
    observer.observe(target);
});


document.addEventListener('DOMContentLoaded', () => {
  const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const element = entry.target;
              element.classList.remove('hidden2');
              // typeWriter("Software Development", "typewriter", 300);
              typeWriter("Vision System", "typewriter2", 300);
              observer2.unobserve(element);
          }
      });
  });

  // const target = document.getElementById('typewriter');
  const target2 =document.getElementById('typewriter2');
  observer2.observe(target2);
});






document.addEventListener('DOMContentLoaded', () => {
  const observerWebDesign = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const element = entry.target;
              element.classList.remove('hiddenWebDesign');
          
              typeWriter("Web Design", "typewriterWebDesign", 300);
              observerWebDesign.unobserve(element);
          }
      });
  });

  // const target = document.getElementById('typewriter');
  const targetWebDesign =document.getElementById('typewriterWebDesign');
  observerWebDesign.observe(targetWebDesign);
});



