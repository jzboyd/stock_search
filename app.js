///////////////////////////////////////////////////////////////////////////
//GET COMPANY OVERVIEW

$(() => {
// click search button
$('.button').on('click', (event) => {
  event.preventDefault();
  const userInput = $('input[type="text"]').val()
  const container = $('.container')
// ajax call requesting company overview by searching symbol
  $.ajax({
      url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
      type: 'GET',
  }).then(
    (stocks) => {
    console.log(stocks);
//stock overview card
    let stockOverview = $(`
      <div id='stockOverview'>

          <h2>Symbol: ${stocks.Symbol}
          <h2>Company Name: ${stocks.Name}
          <h2>Exchange: ${stocks.Exchange}
          <h2>Sector: ${stocks.Sector}
          <h2>Industry: ${stocks.Industry}
          <h2>Company Information:</h3>
          <h4>${stocks.Description}
          </div>
      `).appendTo(container)

  const $quoteButton = $('<button id = "quoteButton">STOCK QUOTE</button>').prependTo(stockOverview)



// stock quote clickable button
  $('#quoteButton').click((event) => {
    event.preventDefault()
    $.ajax({
          url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=TZ373GA4NIP6ZGMC?datatype=json`,
          type: 'GET',
      }).then(
        (stock) => {
        console.log(stock);

        const $modal = $('<div id="modal">').appendTo('.container')
        const $modalBox = $('<div id=modalBox>').appendTo($modal)

        const closeModal = () => {
              $modal.css('display', 'none');
            }
            $modalBox.empty()

        let $stockModal = $(`
          <div id='stockModal'>
              <button id="close">CLOSE</button>
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
          `).appendTo($modalBox)
          $modal.css('display', 'block')
          $('#close').on('click', closeModal);
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
