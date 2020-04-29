document.addEventListener('DOMContentLoaded', function(){

  const serp = document.getElementById('#serp');
    fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord advice&device=desktop&gl=GB&hl=en&location=United Kingdom&num=20')
      .then(response => response.json())
      .then((data) => {
        const newPosition = (data.organic.map(position => {
          return position.url
          console.log("hi");


          const newPosition = true;
            if (position.url == "landlordlifeguard.co.uk") {
                console.log("You are in the top 100 for this term!");
              } else {
                console.log("You are not in the top 100 - more SEO work is needed.");
            };




        }));
      });
});



