

const Assign1 = () => {

    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center bg-slate-900">
            <div className="border-red-400 border-2">
                <div className="relative w-96 h-96 flex flex-col">
                <img src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover h-1/2 z-12"/>
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 rounded-full object-cover w-36 h-36 m-auto z-10"/>
                <div className="flex justify-end flex-col items-center h-full ">
                    <div className="flex gap-2 items-center justify-center">
                        <p className="text-bold text-xl text-orange-900">Rita Correia</p>
                        <p className="text-bold  text-orange-900">32</p>
                    </div>
                    <h4>London</h4>
                </div>
                   
                 
                </div>
                <div className="flex justify-between p-7">
                    <div className="flex flex-col items-center">
                        <p>80K</p>
                        <p>Followers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>400K</p>
                        <p>Likes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>2.5M</p>
                        <p>Engagement</p>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default Assign1;