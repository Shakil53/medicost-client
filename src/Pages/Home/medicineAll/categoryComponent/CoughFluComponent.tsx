

const CoughFluComponent = ({item}) => {
    const { name, quantity, generic, company, offer, mrp, price, form, category, img } = item;
    const showCard = item.category === 'Cough and Flu';

   
    return (
     
        <div className="card card-compact w-64 bg-base-100 shadow-lg mb-2">
            {
                showCard && (
                    < >
                    <div className="card-body">
                     <figure><img src={img} alt="medicineImg" /></figure>
                        <h2 className="card-title"><span className='truncate'>{name}</span> <span className='text-xs font-semibold relative top-[0.5em]'>{quantity}</span></h2>
                    <p className='font-sans text-[#4fff7b] font'>{generic}</p>
                    <p className='font-sans text-[#c2c9c2] font'>{company}</p>
                  
                    <div className="card-actions justify-end items-center">
                            <p><span className='text-[34px] font-bold'>৳</span><span className='font-bold text-[24px]'>{price}</span></p>   
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                            <button className="btn btn-xs">Add To Cart</button>
                    </div>
                    </div>
                    </>
                    )
            }    
                </div>
               
    );
};

export default CoughFluComponent;