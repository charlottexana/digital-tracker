// curl -X POST \
// https://app.zenserp.com/api/v1/batches \
// -H 'Content-Type: application/json' \
// -H 'apikey: 700c9fe0-74fd-11ea-826c-03f7ed395182' \
// -d '{
//         "webhook_url": "https://webhook.site",
//         "jobs": [
//             {
//                 "q": "landlord lifeguard",
//                 "custom_id":"customId123"
//             },
//             {
//                 "product_id": "6900132173303686808",
//                 "custom_id":"customId123",
//                 "type": "search"
//             },
//             {
//                 "keyword": [
//                     "landlord advice",
//                     "tenant referencing"
//                 ],
//                 "type": "trends"
//             }
//         ]
//     }'

const options = {
  "url": "https://app.zenserp.com/api/v2/batches/",
  "apikey": "700c9fe0-74fd-11ea-826c-03f7ed395182",
  "content-type": "application/json",
  "webhook_url": "http://localhost:3000/keywords",
  "jobs": [
        {
            "q": "landlord lifeguard",
        },

        {
            "keyword": [
              "landlord lifeguard",
              "landlord advice",
              "landlord help",
              "tenant referencing",
              "should i sell my rental property"
              ],

              "type": "search",
        },
      ]
};

console.log(options.jobs[1]["keyword"][3]);

// batchSerp = (options.jobs[1]["keyword"].forEach("keyword" => {
//   debugger
//   fetch('https://app.zenserp.com/api/v2/batches/');
//   console.log("this worked");
// }

//   ));

