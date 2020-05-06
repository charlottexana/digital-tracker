document.addEventListener('DOMContentLoaded', function(){
  const serp = document.querySelector('#serp');

    if(serp) {

    fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord advice&device=desktop&gl=GB&hl=en&location=United Kingdom&num=20')
      .then(response => response.json())
      .then((data) => {
        const newPosition = (data.organic.forEach(position => {
          if (position.url.includes("gov.uk")) {
            console.log("Your position is " + position.position);
            console.log("You are in the top 100 for this term!");
            serp.textContent = ("Your position is " + position.position + ". You are in the top 100 for this term!");
          } else {
            console.log("You are not in the top 100 - more SEO work is needed.");
          };
        }));
      });
    };
});





