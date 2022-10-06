// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    res.status(200).json({ name: 'John Doe' })
  }catch (e) {
    res.status(500).json(e)
  }
}
