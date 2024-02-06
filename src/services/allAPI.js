import { commonAPI } from "./commonAPI";

import { serverUrl } from "./serverUrl";


//upload video

export const uploadVideo=async(reqBody)=>{
    //make post http request "http://localhost:4000/" to add videos to the json server and return the response to  add component

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from jsonserver

export const getAllVideo= async()=>{

//make get http request "http://localhost:4000/" to get all  videos from json server and return the response to  view component
    return await commonAPI("GET",`${serverUrl}/videos`,"")
}


//get a video

export const getVideo= async(id)=>{

    //make get http request "http://localhost:4000/" to get all  videos from json server and return the response to  videocard component


        return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
    }

    //delete a video

    
export const deleteVideo= async(id)=>{

    //make DELETE http request "http://localhost:4000/" to delete  videos from json server and return the response to  videocard component


        return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
    }

    //store watching  video history to json server

    export const addToHistory= async(videoDetails)=>{

        //make POST http request "http://localhost:4000/" to store  videos from json server and return the response to  watchhistory component
    
    
            return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
        }

        //get watching video history to json server

        export const getAllHistory= async()=>{

            //make GET http request "http://localhost:4000/" to get  videos from json server and return the response to  watchhistory component
        
        
                return await commonAPI("GET",`${serverUrl}/history`,"")
            }

            export const deleteHistory= async(id)=>{

                //make DELETE http request "http://localhost:4000/" to get  videos from json server and return the response to  watchhistory component
            
            
                    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
                }




            export const addToCategory= async(reqBody)=>{

                //make POST http request "http://localhost:4000/categories" to store  videos to json server and return the response to  category component
            
            
                    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
                }


                export const getAllCategory= async()=>{

                    //make GET http request "http://localhost:4000/categories" to get all  videos to json server and return the response to  category component
                
                
                        return await commonAPI("GET",`${serverUrl}/categories`,"")
                    }



                    export const deleteCategory= async(id)=>{

                        //make DELETE http request "http://localhost:4000/categories" to delete all  videos to json server and return the response to  category component
                    
                    
                            return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
                        }
        

                        export const updateCategory= async(id,body)=>{

                            //make PUT http request "http://localhost:4000/categories" to update all  videos to json server and return the response to  category component
                        
                        
                                return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
                            }
    





