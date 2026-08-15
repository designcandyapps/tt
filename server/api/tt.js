export default defineEventHandler(async()=>{
  const response=await fetch("https://api.tickettailor.com/v1/events/:2036131",{
    headers:{
      Accept:"application/json",
      Authorization:"Basic "+Buffer.from("sk_14995_133548_95cbe0f619ded70f2d57a144acefffc5:").toString("base64")},
  });
  const data=await response.json();
  alert("Test");
  //alert("RES1P: "+JSON.stringify(data));
  return data;
});
