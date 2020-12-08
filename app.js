///////////////////////////////////////////////////////////////////////////
//GET COMPANY OVERVIEW

$(() => {
// clickable search button
$('.button').on('click', (event) => {
  event.preventDefault();
  const userInput = $('input[type="text"]').val()
  const container = $('.container')
// ajax call pulling company overview by searching symbol
  $.ajax({
      url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
      type: 'GET',
  }).then(
    (stocks) => {
    console.log(stocks);
//stock overview card
    let stockOverview = $(`
      <div id='stockCard'>

          <h2>Symbol: ${stocks.Symbol}
          <h3>Company Name: ${stocks.Name}
          <h2>Exchange: ${stocks.Exchange}
          <h4>Company Sector: ${stocks.Sector}
          <h4>Company Industry: ${stocks.Industry}
          <h4>Company Info: ${stocks.Description}
          </div>
      `).appendTo(container)

  const quoteButton = $('<button id = "quoteButton">STOCK QUOTE</button>').prependTo(stockOverview)
// stock quote clickable button
  $('#quoteButton').click((event) => {
    event.preventDefault()
    $.ajax({
          url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
          type: 'GET',
      }).then(
        (stock) => {
        console.log(stock);
        // const container = $('.container')

        let stockCard = $(`
          <div id='stockCard'>
              <h4> ${stock["Global Quote"]["01. symbol"]}
              <h4>Open: $${stock["Global Quote"]["02. open"]}
              <h4>High: $${stock["Global Quote"]["03. high"]}
              <h4>Low: $${stock["Global Quote"]["04. low"]}
              <h4>Price: $${stock["Global Quote"]["05. price"]}
              <h4>Volume: ${stock["Global Quote"]["06. volume"]}
              <h4>Latest Trading Day: ${stock["Global Quote"]["07. latest trading day"]}
              <h4>Previous Close: ${stock["Global Quote"]["08. previous close"]}
              <h4>Change: ${stock["Global Quote"]["09. change"]}
              <h4>Change Percent: ${stock["Global Quote"]["10. change percent"]}
          `).prependTo(stockOverview)


    });
  })
  }),
  (err) => {
    console.log(err);
    }
  })


})
///////////////////////////////////////////////////////////////////////////
//GET COMPANY OVERVIEW




// $('.stockModalButton').click((event) => {
//   event.preventDefault()
//   $.ajax({
//       url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
//       type: 'GET',
//   }).then(
//     (stock) => {
//     console.log(stock);
//     // const container = $('.container')
//
//     let stockCard = $(`
//       <div id='stockCard'>
//           <h4>${stock["Global Quote"]["01. symbol"]}
//           <h4>${stock["Global Quote"]["02. open"]}
//           <h4>${stock["Global Quote"]["03. high"]}
//           <h4>${stock["Global Quote"]["04. low"]}
//           <h4>${stock["Global Quote"]["05. price"]}
//           <h4>${stock["Global Quote"]["06. volume"]}
//           <h4>${stock["Global Quote"]["07. latest trading day"]}
//           <h4>${stock["Global Quote"]["08. previous close"]}
//           <h4>${stock["Global Quote"]["09. change"]}
//           <h4>${stock["Global Quote"]["10. change percent"]}
//       `)
//
// });
//
// });
// });
//
// ////////////////////////////////////////////////////////////////
// // GET GLOBAL QUOTE//
//
// // $(() => {
// //   //search
// //
// // $('.button').on('click', (event) => {
// //   event.preventDefault();
// // // user input stock symbol
// // const userInput = $('input[type="text"]').val()
// // // let symbol = $(event.target).attr('id')
// // $.ajax({
// //     url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
// //     type: 'GET',
// // }).then(
// //   (stock) => {
// //   console.log(stock);
// //   // const container = $('.container')
// //
// //   let stockCard = $(`
// //     <div id='stockCard'>
// //         <h4>${stock["Global Quote"]["01. symbol"]}
// //         <h4>${stock["Global Quote"]["02. open"]}
// //         <h4>${stock["Global Quote"]["03. high"]}
// //         <h4>${stock["Global Quote"]["04. low"]}
// //         <h4>${stock["Global Quote"]["05. price"]}
// //         <h4>${stock["Global Quote"]["06. volume"]}
// //         <h4>${stock["Global Quote"]["07. latest trading day"]}
// //         <h4>${stock["Global Quote"]["08. previous close"]}
// //         <h4>${stock["Global Quote"]["09. change"]}
// //         <h4>${stock["Global Quote"]["10. change percent"]}
// //     `)
// //
// // },
// //   (error) => {
// //   console.log(error);
// // })
// //   });
//
//
//
//
//
// // ///////////////////////////////////////////////////////////////////////////
// // //GET COMPANY OVERVIEW
// // $(() => {
// //   //search
// //
// // $('.button').on('click', (event) => {
// //   event.preventDefault();
// // // user input stock symbol
// // const userInput = $('input[type="text"]').val()
// // // let symbol = $(event.target).attr('id')
// // $.ajax({
// //     url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
// //     type: 'GET',
// // }).then(
// //   (stocks) => {
// //   console.log(stocks);
// //   // const container = $('.container')
// //   $('<div>').addClass('stock-info').appendTo('body')
// //
// //   $('<h4>').html('Symbol: ').appendTo('.stock-info')
// //   $('<h4>').addClass('symbol').html(stocks.Symbol).appendTo('.stock-info');
// //
// //   $('<h4>').html('Company Name: ').appendTo('.stock-info')
// //   $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-info')
// //
// //   $('<h4>').html('Exchange: ').appendTo('.stock-info')
// //   $('<h4>').addClass('exchange').html(stocks.Exchange).appendTo('.stock-info')
// //
// //   $('<h4>').html('Description: ').appendTo('.stock-info')
// //   $('<h4>').addClass('description').html(stocks.Description).appendTo('.stock-info')
// //
// //   $('<h4>').html('Sector: ').appendTo('.stock-info')
// //   $('<h4>').addClass('sector').html(stocks.Sector).appendTo('.stock-info')
// //
// //   $('<h4>').html('Industry: ').appendTo('.stock-info')
// //   $('<h4>').addClass('industry').html(stocks.Industry).appendTo('.stock-info')
// //
// // },
// //   (error) => {
// //   console.log(error);
// // })
// //   });
// // });
//
// //////////////////////////////////////////////////////////////////////////////
// // GET EXCHANGE OVERVIEW
// // $(() => {
// //   //search
// // $('.button').on('click', () => {
// //   event.preventDefault();
// //
// // let exchange = $(event.target).attr('id')
// //
// // $.ajax({
// //     url: `https://www.alphavantage.co/query?function=OVERVIEW&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
// //     type: 'GET',
// // }).then(
// //   (stocks) => {
// //   console.log(stocks);
// //   // const container = $('.container')
// //   $('<div>').appendTo('#NYSE')
// //
// //   $('<h4>').html('Symbol: ').appendTo('.stock-info')
// //   $('<h4>').addClass('symbol').html(stocks.Symbol).appendTo('.stock-info');
// //
// //   $('<h4>').html('Company Name: ').appendTo('.stock-info')
// //   $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-info')
// //
// //
// // },
// //   (error) => {
// //   console.log(error);
// // })
// //   });
// // });
//
// //////////////////////////////////////////////////////////////////
// //   // $(`<div>
// //   //   <h3>Symbol</h3>
// //   //   <p>${stock.Symbol}</p>
// //   //   <p>Company Name:<p>${stock.Name}</p>`).appendTo('.container')
// //   // let myData1 = Object.keys(data)
// //   // console.log(data[myData1[1]]);
// //   // let myDates = Object.keys(data)
//
//
//
//
//
//
//
//
//   // for (let i = 0; i < data.length; i++) {
//     // $('<div>').html('Symbol').appendTo('body')
//     // $('<div>').addClass('symbol').html(data).appendTo('body');
//     // const $button =
//     //           $('<button>').appendTo('body')
//     //           const $popUp =
//     //           $('<p>').addClass('NASDAQ').html(data.Exchange('NASDAQ'));
//     //           $popUp.appendTo($button)
//     //           $button.on('click', (event) => {
//     //             $popUp.toggle()
//     //                       })
//     //                     })
//     //
//     //                   }
//     //                 );
//     //   });
//
//
// //
// //         for (let i = 0; i < data.length; i++) {
// //           $('<p>').html('📍Borough').appendTo('body')
// //           $('<p>').addClass('borough').html(data[i].borough).appendTo('body');
// //
//
// // $('<p>').html('🚨Alert').appendTo('body')
// //           $('<p>').addClass('descriptor').html(data[i].descriptor).appendTo('body');
// //           $('<p>').html('👮🏻‍♂️Agency').appendTo('body')
// //           $('<p>').addClass('agency').html(data[i].agency).appendTo('body');
// //           const $button =
// //           $('<button>').html('Resolution description').appendTo('body')
// //           const $popUp =
// //           $('<p>').addClass('resolution_description').html(data[i].resolution_description);
// //           $popUp.appendTo($button)
// //           $button.on('click', (event) => {
// //             $popUp.toggle()
// //           })
// //         }
// //
// //       }
// //     );
// //   });
//
//
//
//
//
//
//
//
// // /////////////////////////////////////////////////////////////////////
// // `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`
//
// // $(() => {
// // $('.button').on('click', (event) => {
// //   event.preventDefault();
// //
// // const userInput = $('input[type="text"]').val()
// // let symbol = $(event.target).attr('id')
// // $.ajax({
// //     url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`,
// //     type: 'GET',
// // }).then(
// //   (data) => {
// //   console.log(data);
// //   // for (let i = 0; i < data.length; i++) {
// //     $('<div>').html('Symbol').appendTo('body')
// //     $('<div>').addClass('symbol').html(data).appendTo('body');
// //     const $button =
// //               $('<button>').appendTo('body')
// //               const $popUp =
// //               $('<p>').addClass('NASDAQ').html(data.Exchange('NASDAQ'));
// //               $popUp.appendTo($button)
// //               $button.on('click', (event) => {
// //                 $popUp.toggle()
// //                           })
// //                         })
// //
// //                       }
// //                     );
// //       });
// // });
// /////////////////////////////////////////////////////////
// // TZ373GA4NIP6ZGMC
// // `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC`
// // $.ajax({
// //     url: 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=TZ373GA4NIP6ZGMC',
// //     type: 'GET',
// // }).then(
// //   (data) => {
// //   console.log(data);
// // });
// // $(() => {
// //   //search
// // $('.button').on('click', (event) => {
// //   event.preventDefault();
// // // user input stock symbol
// // const userInput = $('input[type="text"]').val()
// // // let symbol = $(event.target).attr('id')
// // $.ajax({
// //     url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
// //     type: 'GET',
// // }).then(
// //   (stocks) => {
// //   console.log(stocks);
// //
// // const stockCard = $(`
// //     <div>
// //     <h3>Stock Symbol:${ stocks["Global Quote"]["1. symbol"]}</h3>
// //     <p>Open: ${ stocks["Global Quote"]["2. open"]}</p>
// //     <p>High: ${ stocks["Global Quote"]["3. highl"]}</p>
// //     <p>Low:  ${ stocks["Global Quote"]["4. low"]}</p>
// //     </div>
// // `).appendTo('body')
// // console.log(stocks.stockCard);
// //   // const container = $('.container')
// //   // $('<div>').addClass('stock-card').appendTo('body')
// //   //
// //   // $('<h4>').html('Symbol: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('symbol').html(stocks.symbol).appendTo('.stock-card');
// //   //
// //   // $('<h4>').html('Company Name: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('name').html(stocks.Name).appendTo('.stock-card')
// //   //
// //   // $('<h4>').html('Exchange: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('exchange').html(stocks.Exchange).appendTo('.stock-card')
// //   //
// //   // $('<h4>').html('Description: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('description').html(stocks.Description).appendTo('.stock-card')
// //   //
// //   // $('<h4>').html('Sector: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('sector').html(stocks.Sector).appendTo('.stock-card')
// //   //
// //   // $('<h4>').html('Industry: ').appendTo('.stock-card')
// //   // $('<h4>').addClass('industry').html(stocks.Industry).appendTo('.stock-card')
// //   // $(`<div>
// //   //   <h3>Symbol</h3>
// //   //   <p>${stock.Symbol}</p>
// //   //   <p>Company Name:<p>${stock.Name}</p>`).appendTo('.container')
// //   // let myData1 = Object.keys(data)
// //   // console.log(data[myData1[1]]);
// //   // let myDates = Object.keys(data)
// // },
// //   (error) => {
// //   console.log(error);
// // })
// //   });
// // });
