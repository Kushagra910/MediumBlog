import { Navbar } from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import {  useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const navigate = useNavigate();

  const publishHandler = async () => {
    const response = await axios.post(`${BACKEND_URL}/api/v1 /blog`, {
      title,
      content:description,
    },{
      headers:{
        Authorization : localStorage.getItem('token')
      }
    });
    navigate(`/blog/${response.data.id}`)
  };
  return (
    <div className="w-full bg-slate-500 h-screen">
      <div className="w-full bg-slate-300"><Navbar name={"kushagra"} /></div>
      <div className="flex  justify-center  w-full pt-8 ">
        <div className="max-w-screen-lg w-full flex flex-col gap-3">
          <label
            htmlFor="text"
            className="block mb-2  font-bold text-gray-900 text-3xl"
          >
            Title
          </label>
          <input
            type="text"
            id="text"
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
            className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          />
          <TextEditor onChange = {(e) => setDescription(e.target.value)} />
          <button
            onClick={publishHandler}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center max-w-fit text-white bg-slate-900 rounded-lg focus:ring-4 hover:bg-slate-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange : (e : ChangeEvent<HTMLTextAreaElement>)=> void}) {

  return (
    <form>
      <div className="w-full min-h-min mb-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="px-4 py-2 bg-white rounded-b-lg w-full">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            id="editor"
            onChange={onChange}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 h-40 focus:outline-none"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </form>
  );
}
