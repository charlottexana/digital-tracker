document.addEventListener('DOMContentLoaded', function(){

const myKeyword = document.querySelector('#keywords');

fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20lifeguard&device=desktop&gl=GB&hl=en&location=United%20Kingdom')
  .then(response => response.json())
  .then((data) => {
    const newRanking = (data.organic.map(position => {
      return position.url
    }));

  for (var i = 0; i < newRanking.length; i++) {
      const title = newRanking[i];
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(title ));
      myKeyword.appendChild(li);
  }}
  );
});
