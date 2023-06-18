

const FeatureComponent = ({image,title,text_bold,text}) => {
    return (
        <div className=' shadow-2xl  text-center  mx-5'>
        <img src={image} alt="" />
        <h2 className="font-bold">{title}</h2>
        <div className="divider    bg-black h-[.02px]  "></div>
        <p><span className="font-bold">{text_bold}</span> {text}</p>
        <button className="btn btn-info btn-sm  mx-auto">Know More</button>
    </div>
    );
};

export default FeatureComponent;