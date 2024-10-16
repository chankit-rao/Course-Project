import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner  from "./components/Spinner";



const App = () => {

  let [courses,setCourses] = useState(null);
  let [loading, setLoading] = useState(true);
  let [category, setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch(error)
    {
      toast.error("network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (<div className="min-h-screen  flex flex-col bg-bgDark2">
    <div>
      <Navbar/>
    </div>

    <div className="bg-bgDark2">
    <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>

    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
      { loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) }
    </div>
    </div>
  </div>);
};

export default App;
