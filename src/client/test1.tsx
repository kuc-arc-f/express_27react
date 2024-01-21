import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head'
//
let pageItems: any[] = [];
//
function Page() {
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  const testProc = async function(){
    console.log("#testProc");
    // /api/test/test1
    const item  = {
      "api_url": "/api/test/test1",
      "userId": 0,
    }
    const body: any = JSON.stringify(item);		
    const res = await fetch("/api/common/send_post", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: body
    });
    const json = await res.json()
    pageItems = json.data;
    setUpdatetime(new Date().toString());
console.log(json.data); 
  }
  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2">test1.tsx
    </h1>
    <hr />
    <p>Test-page</p>
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>testProc()}>Test
    </button>
    <hr className="my-1" />
    {pageItems.map((item: any ,index: number) => {
    return (
    <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <hr />
    </div>
    )
    })}    
  </div>
  );
}

export default Page;
/*
*/