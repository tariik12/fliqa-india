

const HeaderComponent = ({title, des}) => {
    return (
        <div>
             <h1 className="text-[#4C696D] font-itoya text-sm font-bold md:text-4xl">{title}</h1>
                <p className="text-[#0C0C0C] font-itoya text-xs md:text-xl">{des}</p>
        </div>
    );
};

export default HeaderComponent;