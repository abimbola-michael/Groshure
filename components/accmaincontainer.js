

export default function ACmainContainer({ children }){

    return(
            <div className='w-100p my-20 flex md:flex-row flex-col justify-stretch items-start relative xl:my-[100px] 2xl:my-[200px] 3xl:my-28 4xl:my-[20rem]  md:min-h-[350px] '>
                { children }
            </div>
    );


}