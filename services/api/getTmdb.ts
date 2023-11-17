import axios from 'axios';
import { API_BASE, API_KEY } from '../config/clientApi';


interface Movie {
  slug: string;
  title: string;
  items: any; // Substitua 'any' com o tipo correto baseado na resposta da API
}

const basicFetch = async (endpoint: string) => {
  const response = await axios.get(`${API_BASE}${endpoint}`);
  return response.data;
};

const api = {
  getHomeList: async (): Promise<Movie[]> => {
    return [
      {
        slug: 'Originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(
          `/trending/all/week?languange=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },

      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (
    movieId: number,
    type: 'movie' | 'tv'
  ): Promise<any> => {
    let info: any = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};

export default api;
