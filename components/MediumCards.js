import Image from "next/image";

function MediumCards({img, title}) {
    return (
        <div className="cursor-pointer">
            <div className=" relative h-80 w-80">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg hover:scale-105 transition transform duration-300 ease-out"
                />
            </div>
            <h3 className="text-2xl mt-3 font-semibold ">{title}</h3>

        </div>
    )
}

export default MediumCards


