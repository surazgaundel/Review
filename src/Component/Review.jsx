/* eslint-disable react/prop-types */
import { BsChatRightQuoteFill } from "react-icons/bs";

export default function Review({user}) {
    const {image,job,name,text}=user;

    const styles={
        backgroundColor:'#10baf1',
        width: '7rem',
        height: '0.25rem',
        margin:' 0 auto',
        marginTop:'1rem'
        }
  return (
    <div className="m-2 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-1">Review Board</h1>
        <div style={styles}></div>
        <div className='relative mt-3'>
            <BsChatRightQuoteFill className='absolute text-3xl text-primary'/>
            <div className="bg-primary h-32 w-32 rounded-full absolute -top-1 left-2 -z-10"></div>
            <img className='h-32 w-32 rounded-full object-cover'src={image} alt={image}/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="capitalize font-semibold text-xl">{name}</h1>
            <h3 className='uppercase text-primary tracking-wide font-semibold'>{job}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
