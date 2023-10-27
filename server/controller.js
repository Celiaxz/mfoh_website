// const https = require("https");

// const payStack = {
//   acceptPayment: async (req, res) => {
//     try {
//       console.log("This is my post request");
//       //request body from the clients
//       const email = req.body.email;
//       const amount = req.body.amount;

//       //params
//       const params = JSON.stringify({
//         email: email,
//         amount: amount * 100,
//       });

//       //options
//       const options = {
//         hostname: "api.paystack.co",
//         port: 443,
//         path: "/transaction/initialize",
//         method: "POST",
//         headers: {
//           //where you place your secret
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           "Content-Type": "application/json",
//         },
//       };
//       console.log("options: ", options);
//       // client request to paystack API
//       const clientReq = https.request(options, (apiRes) => {
//         let data = "";
//         apiRes.on("data", (chunk) => {
//           data += chunk;
//         });

//         apiRes.on("end", () => {
//           //Parse the response data
//           console.log(JSON.parse(data));
//           return res.status(200).json(data);
//           const responseData = JSON.parse(data);
//           // return res.status(200).json(responseData);
//         });
//       });

//       //Handle errors for the client request

//       clientReq.on("error", (error) => {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred" });
//       });
//       //send the request payload
//       clientReq.write(params);
//       //End the request
//       clientReq.end();
//     } catch (error) {
//       //handle any errors that occur during the request
//       console.error(error);
//       res.status(500).json({ error: "An error ocurred" });
//     }
//   },
// };
// const initializePayment = payStack;
// module.exports = initializePayment;

const https = require("https");

const makePaymentRequest = (requestData) => {
  return new Promise((resolve, reject) => {
    // Parameters for the Paystack API request
    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    };
    console.log("options:", options);
    const reqPaystack = https.request(options, (apiRes) => {
      let data = "";

      apiRes.on("data", (chunk) => {
        data += chunk;
      });

      apiRes.on("end", () => {
        const responseData = JSON.parse(data);
        resolve(responseData);
        console.log(JSON.parse(data));
      });
    });

    reqPaystack.on("error", (error) => {
      console.error(error);
      reject(error);
      res.status(500).json({ error: "An error occurred" });
    });

    // Send the request payload
    reqPaystack.write(JSON.stringify(requestData));
    // End the request
    reqPaystack.end();
  });
};

const payStack = {
  acceptPayment: async (req, res) => {
    try {
      // Retrieve payment data from the request body
      const { email, amount } = req.body;

      // Make a request to Paystack API with the payment data
      const paystackResponse = await makePaymentRequest({
        email: email,
        amount: amount * 100,
      });

      // Send the Paystack response back to the client
      res.status(200).json(paystackResponse);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  },
};

module.exports = payStack;
