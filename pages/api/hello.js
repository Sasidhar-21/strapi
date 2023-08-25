// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


/*
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('http://localhost:1337/api/films');
    const articles = response.data;
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch articles' });
  }
};
*/
