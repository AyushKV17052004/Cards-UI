import Card from "./Card";
function Courses({data ,}){
    return (
    <div className="mx-auto w-4/5 flex flex-row flex-wrap justify-center items-center gap-x-3 gap-y-3 ">
     
     {data.map((Data) =>{
        return <Card  {...Data} ></Card>
     })
    }
    </div>

    )
}

export default Courses;