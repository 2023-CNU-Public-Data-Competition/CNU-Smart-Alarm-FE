const API_END_POINT = 'http://15.164.234.107:8080';

export const request = async (url, options = {}, errorMessage='') => {
    try{
      console.log(`${API_END_POINT}${url}`)
      const res = await fetch(`${API_END_POINT}${url}`, {
        ...options
      });
  
      if(res.ok) {
        return await res.json();
      }
  
      throw new Error('API 호출 오류')
    } catch(e) {
      if(errorMessage !== ''){
        alert(errorMessage);
      }
    }
  } 