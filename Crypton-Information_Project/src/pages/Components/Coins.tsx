import { BsCurrencyBitcoin , BsCoin } from 'react-icons/bs';
import { SiEthereum , SiTether , SiXrp , SiDogecoin , SiBinance , SiPolkadot} from 'react-icons/si'
import { TbBrandBinance } from 'react-icons/tb'
import { bitcoinAPI , etherumAPI, usdCoinAPI , tetherAPI , xrpAPI  ,  bnbAPI, webSocketAPINoConflit, cardonaAPI, polygonAPI, DogecoinAPI }  from '../api/WebSocketAPI'
import NavBar from './NavBar';

const Coins = () => 
{
  bitcoinAPI(`btcbrl`,'criptonID','PCT_Change');
  etherumAPI('ethbrl','EtherumID','PCT_Change_Etherum');
  tetherAPI('usdtbrl','TetherID','PCT_Change_Tether');
  bnbAPI('bnbbrl','BNBID','PCT_Change_BNB');
  usdCoinAPI('usdcusdt','USD_COIN_ID','PCT_Change_USD_COIN');
  
  xrpAPI('xrpbrl','Xrp_ID','PCT_Change_Xrp');
  cardonaAPI('adabrl','Cardona_ID','PCT_Change_Cardona');
  polygonAPI('maticbrl','polygon_ID','PCT_Change_polygon');
  DogecoinAPI('dogebrl','Dogecoin_ID','PCT_Change_Dogecoin');

  webSocketAPINoConflit('busdbrl','BinanceUSD_ID','PCT_Change_BinanceUSD_ID');
  webSocketAPINoConflit('solbrl','Solana_ID','PCT_Change_Solana');
  webSocketAPINoConflit('dotbrl','Polkadot_ID','PCT_Change_Polkadot');

  
  return (
    <>

    <main>

    {/* Barra de Navegação */}
    <NavBar/>
    

    {/* BITCOIN */}
    <article
    className='
    grid
    lg:grid-cols-3
    md:grid-cols-2
    sm:grid-cols-0
    sm:grid-rows-6
    w-full
    h-full
    overflow-hidden
    bg-[#16161c]
    md:gap-[2rem]
    '>
    
    {/* Bitcoin */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    mt-[.6rem]
    rounded-3xl
    mx-auto
    '>
    
    <BsCurrencyBitcoin
    className='
    relative
    block
    text-[27pt]
    text-yellow-700
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Bitcoin</h1>

    <h2
    id='criptonID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change'
    className='
    '>PCT:</h3>

    </div>

    {/* Etherum */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    lg:mt-[.6rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiEthereum
    className='
    relative
    block
    text-[27pt]
    text-purple-700
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Etherum</h1>

    <h2
    id='EtherumID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Etherum'
    className='
    '>PCT:</h3>
    </div>

    {/* Tether */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    lg:mt-[.6rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiTether
    className='
    relative
    block
    text-[27pt]
    text-cyan-700
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Tether</h1>

    <h2
    id='TetherID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Tether'
    className='
    '>PCT:</h3>
    </div>

    {/* BNB */}
    <div
    className='
    relative
    text-center
    lg:mt-[.6rem]
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiBinance
    className='
    relative
    block
    text-[27pt]
    text-yellow-700
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>BNB</h1>

    <h2
    id='BNBID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_BNB'
    className='
    '>PCT:</h3>
    </div>

    {/* USD COIN */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <BsCoin
    className='
    relative
    block
    text-[27pt]
    text-blue-700
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>USD COIN</h1>

    <h2
    id='USD_COIN_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_USD_COIN'
    className='
    '>PCT:</h3>
    </div>

    {/* XRP */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiXrp
    className='
    relative
    block
    text-[27pt]
    text-gray-900
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>XRP</h1>

    <h2
    id='Xrp_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Xrp'
    className='
    '>PCT:</h3>
    </div>

    {/* Cardona */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <img 
    src="/cardano.png" 
    alt="Erro Cardono"
    className='
    block
    relative
    mx-auto
    h-[2.4rem]
    ' 
    />

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Cardona</h1>

    <h2
    id='Cardona_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Cardona'
    className='
    '>PCT:</h3>
    </div>

    {/* Polygon */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <img 
    src="/polygon.png" 
    alt="Erro Cardono"
    className='
    block
    relative
    mx-auto
    h-[2.4rem]
    ' 
    />

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>polygon</h1>

    <h2
    id='polygon_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_polygon'
    className='
    '>PCT:</h3>
    </div>

    {/* Dogecoin */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiDogecoin
    className='
    relative
    block
    text-[27pt]
    text-yellow-600
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Dogecoin</h1>

    <h2
    id='Dogecoin_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Dogecoin'
    className='
    '>PCT:</h3>
    </div>

    {/* Binance USD */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <TbBrandBinance
    className='
    relative
    block
    text-[27pt]
    text-yellow-600
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Binance USD</h1>

    <h2
    id='BinanceUSD_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_BinanceUSD_ID'
    className='
    '>PCT:</h3>
    </div>

    {/* Solana */}
    <div
    className='
    relative
    text-center
    mb-[2rem]
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <img 
    src="/solana.png" 
    alt="Erro Cardono"
    className='
    block
    relative
    mx-auto
    h-[2.4rem]
    ' 
    />

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Solana</h1>

    <h2
    id='Solana_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Solana'
    className='
    '>PCT:</h3>
    </div>

    {/* Polkadot */}
    <div
    className='
    relative
    text-center
    bg-gray-300
    w-[20rem]
    h-[8rem]
    rounded-3xl
    mx-auto
    '>
    
    <SiPolkadot
    className='
    relative
    block
    text-[27pt]
    text-red-600
    mx-auto
    '/>

    <h1
    className='
    block
    relative
    sm:mb-[.3rem]
    md:mb-0
    '>Polkadot</h1>

    <h2
    id='Polkadot_ID'
    className='
    '>Prince: --- </h2>

    <h3
    id='PCT_Change_Polkadot'
    className='
    '>PCT:</h3>
    </div>


    </article>
    </main>

    </>
  )
}

export default Coins