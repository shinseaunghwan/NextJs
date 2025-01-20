export default async function handler(req, res) {
  const { query } = req.query;
  const client_id = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

  try {
    const response = await fetch(`https://openapi.naver.com/v1/search/book?query=${encodeURIComponent(query)}&display=10&start=1&sort=sim`, {
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
      },
    });

    if (!response.ok) {
      console.error('Error:', response.status, response.statusText);
      return res.status(response.status).json({ error: 'API 요청 실패' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: '서버 오류' });
  }
}
