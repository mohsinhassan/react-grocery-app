const ApiRequest = async (url ='' , optionObj =null , errMsg =null ) => {
    try{
        const response = await fetch(url , optionObj);
        console.log(response)
        if(!response.ok) throw Error(response.statusText);

    } catch (err){
        console.log(err)
        return errMsg = err.message;
    } finally  {
        console.log('finally')
        return errMsg;
    }
    
}

export default ApiRequest;