"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { api } from "@/util/axios";
import { getFormLocalStorage } from "@/util/localstorage";
import { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([])

  useEffect(() => {
    const res = getFormLocalStorage("result");
    setResult(res);
  }, []);

  useEffect(() => {
    const getHistory = async() => {
      setLoading(true)
      try{
          const {data} = await api.get('/api/history')
          console.log(data);
          
          if(data?.success){
            setHistory(data?.history)
          }
      }
      catch(err){
        console.error('History fetched failed')
      }
      finally{
        setLoading(false)
      }
    }

    getHistory()
  }, [])

  return (
    <ResumeContext.Provider value={{ result, setResult, loading, setLoading, history, setHistory }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
