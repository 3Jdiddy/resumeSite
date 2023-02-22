const TopBar = () => {
    return(
        <div className='relative flex flex-row justify-end gap-24 text-[1.75vw] font-[Labrada,serif] text-black right-10'> 
          <p className='hover:text-orange-400'>about me</p>
          <p className='hover:text-orange-400'>projects</p>
          <p className='hover:text-orange-400 cursor-pointer transition ease-linear duration-100'>contact</p>
        </div>
    );
}

export default TopBar;