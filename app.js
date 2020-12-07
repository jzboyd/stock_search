
///////////////////////////////////////////////////////////////////////////
//GET COMPANY OVERVIEW
$(() => {
  //search

$('.button').on('click', (event) => {
  event.preventDefault();
// user input stock symbol
const userInput = $('input[type="text"]').val()
// let symbol = $(event.target).attr('id')
$.ajax({
    url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
    type: 'GET',
}).then(
  (stocks) => {
  console.log(stocks);
  // const container = $('.container')
  $('<div>').addClass('stock-info').appendTo('body')

  $('<h4>').html('Symbol: ').appendTo('.stock-info')
  $('<p>').addClass('symbol').html(stocks.Symbol).appendTo('.stock-info');

  $('<h4>').html('Company Name: ').appendTo('.stock-info')
  $('<p>').addClass('name').html(stocks.Name).appendTo('.stock-info')

  $('<h4>').html('Exchange: ').appendTo('.stock-info')
  $('<h4>').addClass('exchange').html(stocks.Exchange).appendTo('.stock-info')

  $('<h4>').html('Description: ').appendTo('.stock-info')
  $('<p>').addClass('description').html(stocks.Description).appendTo('.stock-info')

  $('<h4>').html('Sector: ').appendTo('.stock-info')
  $('<p>').addClass('sector').html(stocks.Sector).appendTo('.stock-info')

  $('<h4>').html('Industry: ').appendTo('.stock-info')
  $('<p>').addClass('industry').html(stocks.Industry).appendTo('.stock-info')

},
  (error) => {
  console.log(error);
})
  });
});

////////////////////////////////////////////////////////////////
// GET GLOBAL QUOTE//

$(() => {
  //search

$('.button').on('click', (event) => {
  event.preventDefault();
// // user input stock symbol
const userInput = $('input[type="text"]').val()
// let symbol = $(event.target).attr('id')
$.ajax({
    url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
    type: 'GET',
}).then(
  (stock) => {
  console.log(stock);
  // const container = $('.container')

  $('<div>').addClass('stock-card').appendTo('body')

  $('<h4>').html('Symbol: ').appendTo('.stock-card')
  $('<h4>').addClass('symbol').html(stock["Global Quote"]["01. symbol"]).appendTo('.stock-card');

  $('<h4>').html('Open: ').appendTo('.stock-card')
  $('<h4>').addClass('open').html(stock["Global Quote"]["02. open"]).appendTo('.stock-card')

  $('<h4>').html('High: $').appendTo('.stock-card')
  $('<h4>').addClass('high').html(stock["Global Quote"]["03. high"]).appendTo('.stock-card')

  $('<h4>').html('Low: $').appendTo('.stock-card')
  $('<h4>').addClass('low').html(stock["Global Quote"]["04. low"]).appendTo('.stock-card')

  $('<h4>').html('Price: ').appendTo('.stock-card')
  $('<h4>').addClass('price').html(stock["Global Quote"]["05. price"]).appendTo('.stock-card')

  $('<h4>').html('Volume: ').appendTo('.stock-card')
  $('<h4>').addClass('volume').html(stock["Global Quote"]["06. volume"]).appendTo('.stock-card')

  $('<h4>').html('Latest Tradeing Day: ').appendTo('.stock-card')
  $('<h4>').addClass('ltd').html(stock["Global Quote"]["07. latest trading day"]).appendTo('.stock-card')

  $('<h4>').html('Previous Close: $').appendTo('.stock-card')
  $('<h4>').addClass('previous close').html(stock["Global Quote"]["08. previous close"]).appendTo('.stock-card')

  $('<h4>').html('Change: $').appendTo('.stock-card')
  $('<h4>').addClass('change').html(stock["Global Quote"]["09. change"]).appendTo('.stock-card')

  $('<h4>').html('Change Percent: ').appendTo('.stock-card')
  $('<h4>').addClass('change percent').html(stock["Global Quote"]["10. change percent"]).appendTo('.stock-card')

  // const $button = $('<button>').html('STOCK QUOTE').appendTo('body')
  //
  //   const $quote = $('<div>').addClass('quote').html(stock).appendTo('body');
  //   $('.button').append($quote)
  //   $button.on('click', (event) => {
  //     $quote.toggle()
  //   })
},
  (error) => {
  console.log(error);
})
  });

  });



// ///////////////////////////////////////////////////////////////////////////
// //GET COMPANY OVERVIEW
// $(() => {
//   //search
//
// $('.button').on('click', (event) => {
//   event.preventDefault();
// // user input stock symbol
// const userInput = $('input[type="text"]').val()
// // let symbol = $(event.target).attr('id')
// $.ajax({
//     url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
//     type: 'GET',
// }).then(
//   (stocks) => {
//   console.log(stocks);
//   // const container = $('.container')
//   $('<div>').addClass('stock-info').appendTo('body')
//
//   $('<h4>').html('Symbol: ').appendTo('.stock-info')
//   $('<h4>').addClass('symbol').html(stocks.Symbol).appendTo('.stock-info');
//
//   $('<h4>').html('Company Name: ').appendTo('.stock-info')
//   $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-info')
//
//   $('<h4>').html('Exchange: ').appendTo('.stock-info')
//   $('<h4>').addClass('exchange').html(stocks.Exchange).appendTo('.stock-info')
//
//   $('<h4>').html('Description: ').appendTo('.stock-info')
//   $('<h4>').addClass('description').html(stocks.Description).appendTo('.stock-info')
//
//   $('<h4>').html('Sector: ').appendTo('.stock-info')
//   $('<h4>').addClass('sector').html(stocks.Sector).appendTo('.stock-info')
//
//   $('<h4>').html('Industry: ').appendTo('.stock-info')
//   $('<h4>').addClass('industry').html(stocks.Industry).appendTo('.stock-info')
//
// },
//   (error) => {
//   console.log(error);
// })
//   });
// });

//////////////////////////////////////////////////////////////////////////////
// GET EXCHANGE OVERVIEW
// $(() => {
//   //search
// $('.button').on('click', () => {
//   event.preventDefault();
//
// let exchange = $(event.target).attr('id')
//
// $.ajax({
//     url: `https://www.alphavantage.co/query?function=OVERVIEW&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
//     type: 'GET',
// }).then(
//   (stocks) => {
//   console.log(stocks);
//   // const container = $('.container')
//   $('<div>').appendTo('#NYSE')
//
//   $('<h4>').html('Symbol: ').appendTo('.stock-info')
//   $('<h4>').addClass('symbol').html(stocks.Symbol).appendTo('.stock-info');
//
//   $('<h4>').html('Company Name: ').appendTo('.stock-info')
//   $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-info')
//
//
// },
//   (error) => {
//   console.log(error);
// })
//   });
// });

//////////////////////////////////////////////////////////////////
//   // $(`<div>
//   //   <h3>Symbol</h3>
//   //   <p>${stock.Symbol}</p>
//   //   <p>Company Name:<p>${stock.Name}</p>`).appendTo('.container')
//   // let myData1 = Object.keys(data)
//   // console.log(data[myData1[1]]);
//   // let myDates = Object.keys(data)








  // for (let i = 0; i < data.length; i++) {
    // $('<div>').html('Symbol').appendTo('body')
    // $('<div>').addClass('symbol').html(data).appendTo('body');
    // const $button =
    //           $('<button>').appendTo('body')
    //           const $popUp =
    //           $('<p>').addClass('NASDAQ').html(data.Exchange('NASDAQ'));
    //           $popUp.appendTo($button)
    //           $button.on('click', (event) => {
    //             $popUp.toggle()
    //                       })
    //                     })
    //
    //                   }
    //                 );
    //   });


//
//         for (let i = 0; i < data.length; i++) {
//           $('<p>').html('📍Borough').appendTo('body')
//           $('<p>').addClass('borough').html(data[i].borough).appendTo('body');
//

// $('<p>').html('🚨Alert').appendTo('body')
//           $('<p>').addClass('descriptor').html(data[i].descriptor).appendTo('body');
//           $('<p>').html('👮🏻‍♂️Agency').appendTo('body')
//           $('<p>').addClass('agency').html(data[i].agency).appendTo('body');
//           const $button =
//           $('<button>').html('Resolution description').appendTo('body')
//           const $popUp =
//           $('<p>').addClass('resolution_description').html(data[i].resolution_description);
//           $popUp.appendTo($button)
//           $button.on('click', (event) => {
//             $popUp.toggle()
//           })
//         }
//
//       }
//     );
//   });








// /////////////////////////////////////////////////////////////////////
// `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`

// $(() => {
// $('.button').on('click', (event) => {
//   event.preventDefault();
//
// const userInput = $('input[type="text"]').val()
// let symbol = $(event.target).attr('id')
// $.ajax({
//     url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`,
//     type: 'GET',
// }).then(
//   (data) => {
//   console.log(data);
//   // for (let i = 0; i < data.length; i++) {
//     $('<div>').html('Symbol').appendTo('body')
//     $('<div>').addClass('symbol').html(data).appendTo('body');
//     const $button =
//               $('<button>').appendTo('body')
//               const $popUp =
//               $('<p>').addClass('NASDAQ').html(data.Exchange('NASDAQ'));
//               $popUp.appendTo($button)
//               $button.on('click', (event) => {
//                 $popUp.toggle()
//                           })
//                         })
//
//                       }
//                     );
//       });
// });
/////////////////////////////////////////////////////////
// TZ373GA4NIP6ZGMC
// `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`
// $.ajax({
//     url: 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=TZ373GA4NIP6ZGMC',
//     type: 'GET',
// }).then(
//   (data) => {
//   console.log(data);
// });
// $(() => {
//   //search
// $('.button').on('click', (event) => {
//   event.preventDefault();
// // user input stock symbol
// const userInput = $('input[type="text"]').val()
// // let symbol = $(event.target).attr('id')
// $.ajax({
//     url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
//     type: 'GET',
// }).then(
//   (stocks) => {
//   console.log(stocks);
//
// const stockCard = $(`
//     <div>
//     <h3>Stock Symbol:${ stocks["Global Quote"]["1. symbol"]}</h3>
//     <p>Open: ${ stocks["Global Quote"]["2. open"]}</p>
//     <p>High: ${ stocks["Global Quote"]["3. highl"]}</p>
//     <p>Low:  ${ stocks["Global Quote"]["4. low"]}</p>
//     </div>
// `).appendTo('body')
// console.log(stocks.stockCard);
//   // const container = $('.container')
//   // $('<div>').addClass('stock-card').appendTo('body')
//   //
//   // $('<h4>').html('Symbol: ').appendTo('.stock-card')
//   // $('<h4>').addClass('symbol').html(stocks.symbol).appendTo('.stock-card');
//   //
//   // $('<h4>').html('Company Name: ').appendTo('.stock-card')
//   // $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-card')
//   //
//   // $('<h4>').html('Exchange: ').appendTo('.stock-card')
//   // $('<h4>').addClass('exchange').html(stocks.Exchange).appendTo('.stock-card')
//   //
//   // $('<h4>').html('Description: ').appendTo('.stock-card')
//   // $('<h4>').addClass('description').html(stocks.Description).appendTo('.stock-card')
//   //
//   // $('<h4>').html('Sector: ').appendTo('.stock-card')
//   // $('<h4>').addClass('sector').html(stocks.Sector).appendTo('.stock-card')
//   //
//   // $('<h4>').html('Industry: ').appendTo('.stock-card')
//   // $('<h4>').addClass('industry').html(stocks.Industry).appendTo('.stock-card')
//   // $(`<div>
//   //   <h3>Symbol</h3>
//   //   <p>${stock.Symbol}</p>
//   //   <p>Company Name:<p>${stock.Name}</p>`).appendTo('.container')
//   // let myData1 = Object.keys(data)
//   // console.log(data[myData1[1]]);
//   // let myDates = Object.keys(data)
// },
//   (error) => {
//   console.log(error);
// })
//   });
// });
