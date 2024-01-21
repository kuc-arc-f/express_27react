import LibConfig from './LibConfig';
require('dotenv').config();
//
const HttpCommon = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  post: async function(item: any, path: string): Promise<any>
  {
    try {
    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  serverPost: async function(item: any, path: string): Promise<any>
  {
    try {
      const url = process.env.POSTGRES_USER;
      //     const apiKey = import.meta.env.PUBLIC_API_KEY;
console.log("#url.apiKey=" + url);
      item.api_key = "";
return;
      const body: any = JSON.stringify(item);		
      const res = await fetch(path, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
      //console.log(json);   
      if (res.status !== 200) {
        console.error("error, status <> 200");
        throw new Error(await res.text());
      }
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");
        return {};
      } 
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  },  
}
export default HttpCommon;
