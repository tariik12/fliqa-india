

const FeatureComponent = ({image,title,text_bold,text}) => {
    return (
        <div className='  text-center p-1  mb-1 mx-5 'style={{boxShadow:'2px 2px 4px  1px #060a099f '}} >
        <img className="w-full" src={image} alt="" />
       <div className=" mb-2 " >
       <h2 className="font-bold">{title}</h2>
        <div className="divider    bg-black h-[.02px]  "></div>
        <p><span className="font-bold">{text_bold}</span> {text}</p>
        <button className="btn btn-info btn-sm  mx-auto">Know More</button>
       </div>
    </div>
    );
};

export default FeatureComponent;