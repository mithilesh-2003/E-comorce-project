import './App.css';
// import { BrowserRouter as Routes ,Router,Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-screen flex ">
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-2 px-5 border rounded border-blue-200 text-blue-300' href='/create'>add new product</a>
        <hr className='w-[80%]'/>
        <h1 className='text-2xl mb-3'>Category filter</h1>
        <ul className=' w-[80%]'>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-blue-200 m-2'></span>{""}
            Cat1
          </li>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-green-200 m-2'></span>{""}
            Cat1
          </li>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-red-200 m-2'></span>{""}
            Cat1
          </li>

         
        </ul>
        
      </nav>

      <div className='h-full w-[85%] pt-5 p-10 ml-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
        <div className='card p-3 border shadow rounded w-[18%] h-[45vh] ml-10 mt-5 flex flex-col items-center justify-center'>
          <div className=' hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"

            ,}}>

          </div>
          <h1>lorem ipsum dolor </h1>
        </div>
      </div>


    </div>
  );
}

export default App;
