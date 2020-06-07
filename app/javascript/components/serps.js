console.log("Hello from digital tracker");
document.addEventListener('DOMContentLoaded', function(){
  const serp = document.querySelector('#serp');

    if(serp) {

    const fetches = ["https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20lifeguard&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=10",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20advice&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=20",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=should%20i%20sell%20my%20rental%20property&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=20",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=what%20is%20tenant%20referencing&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=20",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=preparing%20your%20property%20to%20rent&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=cost%20of%20being%20a%20landlord&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=20&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20rights&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=end%20of%20tenancy%20checklist&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=tenant%20reference%20check&device=desktop&gl=GB&hl=en&location=United%20Kingdom&&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=first%20time%20landlord&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20tax%20return&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20help&device=desktop&gl=GB&hl=en&location=United%20Kingdom&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=managing%20your%20rental%20property&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20checklist%20&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=5&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=marketing%20your%20property&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50",
    "https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20tenant%20dispute&device=desktop&gl=GB&hl=en&location=United%20Kingdom&start=10&num=50"];
    const promises = fetches.map(url => fetch(url).then(response => response.json()));
      Promise.all(promises)
      .then((results) => {
        results.forEach((data, index) => {
          console.log("query", data.query.q);
          const query = (data.query.q);
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(query));
          serp.appendChild(li);
          const newPosition = (data.organic.forEach(rank => {
            if (rank.url.includes("landlordlifeguard.co.uk")) {
              const text = query + ": " + rank.position;
              const li = document.createElement('li');
              li.appendChild(document.createTextNode(text));
              serp.appendChild(li);
            };
          }));
        });
      });
    };
});
