
import { useEffect, useState } from 'react';

const useLogger = (methodType, scope, message) => {
    const [isTime,setTime]= useState(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()))
    useEffect(()=>{
      const consoleMethods = {
        Log: console.log,
        Warn: console.warn,
        Error: console.error,
        Info: console.info,
    };
    const logMethod = consoleMethods[methodType] || console.log;
    logMethod(`[${isTime}] [${scope}] ${message}`);
    },[methodType, scope, message])
}

export default useLogger