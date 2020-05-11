document.addEventListener('DOMContentLoaded', function(){
  const serp = document.querySelector('#serp');

    if(serp) {

    const urls = ["https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20advice&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=20", "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=should%20i%20sell%20my%20rental%20property&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=50"];
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    // fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord advice&device=desktop&gl=GB&hl=en&location=United Kingdom&num=20')

      Promise.all(promises)
      // .then(response => response.json())
      .then((results) => {
        results.forEach((data, index) => {
          console.log("current url", urls[index]);
          const newPosition = (data.organic.forEach(position => {
            if (position.url.includes("landlordlifeguard.co.uk")) {
              console.log("Your position is " + position.position);
              console.log("You are in the top 100 for this term!");
              serp.textContent = ("Your position is " + position.position + ". You are in the top 100 for this term!");
            } else {
              console.log("You are not in the top 100 - more SEO work is needed.");
            };
          }));
        })
      });
    };
});




