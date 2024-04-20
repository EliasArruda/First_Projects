// Foram criados varias exportações , por que estava havendo conflito na conexão

export const bitcoinAPI = async (coin,princeID,pctID)=>
{

  let stockPriceElement = document.getElementById(`${princeID}`);
  let pctChange = document.getElementById(`${pctID}`);

  let lastPrince = null;
  let lastChangePrince = null;

  let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
  let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`;

  let ws =  new WebSocket(urlWS);
  let psc = await new WebSocket(percentagePrice);

    if(typeof window !== 'undefined')
    {
      ws.addEventListener("message",(event)=>
      {
        let stockObject = JSON.parse(event.data);
        let price = parseFloat(stockObject.p).toFixed(2);
        
        price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
        stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
        lastPrince = price;
      })

      psc.addEventListener("message",(event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      })
    }

}

export const etherumAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const tetherAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const bnbAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const usdCoinAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const xrpAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const cardonaAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const polygonAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const DogecoinAPI = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`;

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}

export const webSocketAPINoConflit = async (coin,princeID,pctID)=>
{
    if(typeof window !== 'undefined')
    {
      let urlWS = `wss://stream.binance.com:9443/ws/${coin}@trade`;
      let percentagePrice = `wss://stream.binance.com:9443/ws/${coin}@ticker`

      let stockPriceElement = document.getElementById(`${princeID}`);
      let pctChange = document.getElementById(`${pctID}`);

      let lastPrince = null;
      let lastChangePrince = null;
  
      let ws = await new WebSocket(urlWS);
      let psc = await new WebSocket(percentagePrice);

      ws.onmessage = (event)=>
      {
          let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          
          price > lastPrince ? stockPriceElement.innerHTML = `Price: $:   🔼${price}` : stockPriceElement.innerHTML = `Price: $: 🔽${price}`;
          stockPriceElement.style.color = !lastPrince || lastPrince === price ? 'black': price > lastPrince ? 'green' : 'red';
          lastPrince = price;
      }

      psc.onmessage = (event)=>
      {
        let changePriceObject = JSON.parse(event.data);
        let porcentualPrince = parseFloat(changePriceObject.P).toFixed(2);
        
        porcentualPrince > lastChangePrince ? pctChange.innerHTML = `PCT: 🔼${porcentualPrince}%` : pctChange.innerHTML = `PCT:  🔽${porcentualPrince}%`;
        if(porcentualPrince == lastChangePrince) pctChange.innerHTML = `PCT: ${porcentualPrince}%`

        pctChange.style.color = !lastChangePrince || lastChangePrince === porcentualPrince ? 'black' : porcentualPrince > lastChangePrince ? 'green' : 'red';
        lastChangePrince = porcentualPrince;
      }
    }
}