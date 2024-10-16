import React from "react";
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
           setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
           toast.warning("like removed");
        }
        else{

            if(likedCourses.length === 0){
                console.log("hello length is 0");
                setLikedCourses([course.id]);
            }
            else{
                console.log(`hello length is ${likedCourses.length}`)
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }


    return (
        <div className="w-[300px] bg-opacity-80 bg-bgDark rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} className="" />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-18px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id)?
                            (<FcLikePlaceholder fontSize="1.75rem"/>):
                            (<FcLike fontSize='1.75rem' />)
                            }
                    </button>
                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                    course.description.length >100 ? (course.description.substr(0,100)+"...") :(course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;