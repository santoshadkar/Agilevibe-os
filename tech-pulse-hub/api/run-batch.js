import newsHandler from './news.js';

export default async function handler(req, res) {
  return newsHandler(req, res);
}
