
import './App.css';
import logo from './components/img/logo.png'


function App() {
  return (
    
     <div   >
     <nav class="bg-deepBlue">
        <div class="relative w-[1080px] h-20 mx-auto flex items-center justify-between">
        

            <a href="/" class="cursor-pointer py-7 pr-7">
                <img src={logo}
               className='h-20 w-20'
               />
            </a>

            <ul class="flex gap-4">
                
                <li class="text-white cursor-pointer font-mullish py-7 hover:text-lightBlue
                transition-all duration-200   relative group">
                <a href="#">Home</a>
                <div class="h-1 absolute bottom-0 w-full bg-lightBlue hidden group-hover:block"></div>
            </li>
                <li class="text-white cursor-pointer font-mullish py-7 hover:text-lightBlue
                transition-all duration-200   relative group">
                <a href="#">Attendence Sheet</a>
                <div class="h-1 absolute bottom-0 w-full bg-lightBlue hidden group-hover:block"></div>
            </li>
             
            
                <li class="text-white cursor-pointer font-mullish py-7 hover:text-lightBlue
                transition-all duration-200   relative group">
                <a href="#">Support</a>
                <div class="h-1 absolute bottom-0 w-full bg-lightBlue hidden group-hover:block"></div>
            </li>
                <li class="text-white cursor-pointer font-mullish py-7 hover:text-lightBlue
                transition-all duration-200   relative group">
                <a href="#">Login</a>
                <div class="h-1 absolute bottom-0 w-full bg-lightBlue hidden group-hover:block"></div>
            </li>
            </ul>
           

             

        </div>
    </nav>
    
     </div>
  );
}

export default App;
