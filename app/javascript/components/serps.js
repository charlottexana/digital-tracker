document.addEventListener('DOMContentLoaded', function(){
  const serp = document.querySelector('#serp');

    if(serp) {

    const fetches = ["https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20lifeguard&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=10",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20advice&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=20",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=should%20i%20sell%20my%20rental%20property&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=20",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=what%20is%20tenant%20referencing&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=20"];
    const promises = fetches.map(url => fetch(url).then(response => response.json()));
      Promise.all(promises)
      .then((results) => {
        results.forEach((data, index) => {
          console.log("current url", fetches[index]);
          console.log("query", data.query.q);
          const query = (data.query.q);
          const newPosition = (data.organic.forEach(rank => {
            if (rank.url.includes("landlordlifeguard.co.uk")) {
              const text = rank.title + ": " + rank.position;
              const li = document.createElement('li');
              li.appendChild(document.createTextNode(text));
              serp.appendChild(li);
            }
          }));
        });
      });
    };
});
