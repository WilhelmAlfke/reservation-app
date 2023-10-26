 export default async function handler(
  req,
  res
) {
  const {start, end} = req.body

  console.log({start})
  console.log({end})  

  res.status(200).json({ start, end })
}
