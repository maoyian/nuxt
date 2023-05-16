export default defineEventHandler(event => {
  console.log("New request log: " + event.node.req.url)
})
// 请求的中间件 
