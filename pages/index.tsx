import api from "@/services/api/getTmdb";
import * as S from '../styles/home.style';
import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import FeaturedMovie from "@/components/FeaturedMovie";
import MovieRow from "@/components/MovieRow";
import { Image } from "@chakra-ui/react";

interface TMDB {
  choseInfo: any;
  tmdb: any
}

export default function Home({choseInfo , tmdb}: TMDB) {

  const [blackHeader , setBlackHeader] = useState(false);

  useEffect(()=>{
    const scrollListener = () => {
       if(window.scrollY > 20) {
         setBlackHeader(true);
       }else {
         setBlackHeader(false);
       }
    }
 
    window.addEventListener('scroll' , scrollListener);
 
    return() => {
      window.removeEventListener('scroll' , scrollListener);
    }
 
    }, []);

  return (
     <>
      
      <Header black={blackHeader}/>
        
       <S.Container>
     

          {choseInfo && 
            <FeaturedMovie item={choseInfo} />
          }

          <S.Lists>
            {tmdb.map((item : any , key: any) => (
                <MovieRow key={key} title={item.tile} items={item.items} />
            ))}
          </S.Lists>
       </S.Container>

       <footer>
             Copyright <span role="img" aria-label="coração">©</span>B7Week <br/>
             Direitos de Imagem para Netflix <br/>
             Dados inseridos site Themoviedb.org

         </footer>
        {tmdb.length <= 0 &&
        <div className="loading">
           <Image src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
        </div>
        }
     
     </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {

  const tmdb = await api.getHomeList();
  const originals = tmdb.filter( i => i.slug === 'Originals');
  const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
  const chosen = originals[0].items.results[randomChosen];
  const choseInfo = await api.getMovieInfo(chosen.id, 'tv');

  return {
    props: {
      tmdb: tmdb,
      choseInfo: choseInfo,
    },
  };
};