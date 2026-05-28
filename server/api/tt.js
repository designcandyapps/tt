export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.tickettailor.com/v1/events/2036131",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer sk_14995_133548_95cbe0f619ded70f2d57a144acefffc5`
    },
    body:JSON.stringify({
      messages:[{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  alert("RES00a: "+JSON.stringify(data)); alert("RES01a: "+this.response); //console.log(data.message.content);
  return{reply:data.choices[0].message.content};
});
