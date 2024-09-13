// import p1 from './project/p1.png'
// import p2 from './project/p2.png'
// import p7 from './project/p7.png'
// import p9 from './project/9.png'
import p10 from './project/p10.png'
import p11 from './project/p11.png'

const Projects = () => {
    return (
        <div className="">
        <div  id='top' className='pb-[80px]'></div>
        <center>
        <h1 className="font-[clash] text-5xl text-center text-white pt-5" >My Projects_</h1>
        <div className='pt-20 pb-40 flex flex-col space-y-16 px-3 md:px-0' > 
          <div className="card">
            <img src={p10} alt="" className='md:w-[80%] ring-1 hover:ring-2 duration-150 hover:scale-95 ring-white rounded-lg cursor-pointer'/>
          </div>
          <div className="card">
            <img src={p11} alt="" className='md:w-[80%] ring-1 hover:ring-2 duration-150 hover:scale-95 ring-white rounded-lg cursor-pointer'/>
          </div>
        </div>
        </center>
        </div>
       
    )
}

export default Projects