document.addEventListener('DOMContentLoaded', function(){
  const serp = document.querySelector('#serp');
    fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord advice&device=desktop&gl=GB&hl=en&location=United Kingdom&num=20')
      .then(response => response.json())
      .then((data) => {
        const newPosition = (data.organic.forEach(position => {
          if (position.url.includes("landlordlifeguard.co.uk")) {
            serp.textContent = ("Your position is " + position.position + " You are in the top 100 for this term!");
          } else {
            serp.textContent = ("Your position is " + position.position + " You are not in the top 100 - more SEO work is needed.");
          };
        }));
      });
});





