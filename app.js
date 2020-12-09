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

        let $stockModal = $(`
          <div id='stockModal'>
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
          // $modal.css('display', 'block')
          // $('#close').on('click', closeModal);
    });
    const $modal = $('<div id="modal">').appendTo('.container')
    const $modalBox = $('<div id=modalBox>').appendTo($modal)
    const $closeButton = $('<button id="close">CLOSE</button>').appendTo($modalBox)

    const closeModal = () => {
          $modal.css('display', 'none');
          $modal.empty()
        }
        $modal.css('display', 'block')
        $closeButton.on('click', closeModal);
  })

  }),
  (err) => {
     console.log(err);
     }

  })
})
