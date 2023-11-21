import api from "@/services/api/getTmdb";
import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import * as S from '../../styles/internalMovies';
import {
    Button,
    useDisclosure,
  } from '@chakra-ui/react'

interface TMDB {
  tmdb: any;
  slugs: any;
}

export default function Home({tmdb , slugs}: TMDB) {

  const [blackHeader , setBlackHeader] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <S.PlayMovie onClick={onOpen}>Assistir</S.PlayMovie>

      <S.ModalContainer isOpen={isOpen} onClose={onClose}>
            <S.ModalOver />
                <S.ModalContente>
                <S.ModalHead>Modal Title</S.ModalHead>
                <S.ModalClose />

                <S.ModalBodyPage>
                   <video controls>
                      <source src="https://s3.us-east-1.amazonaws.com/media.ativo.com/adm/magento/P%C3%A1ginaO2CorreCarrinho/new1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSYNQPSH4OYQOAHQ/20231121/us-east-1/s3/aws4_request&X-Amz-Date=20231121T140429Z&X-Amz-Expires=604799&X-Amz-Signature=d010f274df06b041b4d249b5e86532894176cb06c69d5db22f8d60f24aa3baaf&X-Amz-SignedHeaders=host&response-content-disposition=inline"/>
                   </video>

                </S.ModalBodyPage>

                <S.ModalFooterpage>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </S.ModalFooterpage>
                </S.ModalContente>
        </S.ModalContainer>
      </S.Container>
     
     </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params || !params.slug) {
      // Handle o caso em que os parâmetros não estão presentes
      return {
        redirect: {
          destination: '/pagina-de-erro', // Redirecione para uma página de erro ou outra página relevante
          permanent: false,
        },
      };
    }
  
    const tmdb = await api.getHomeList();
    const slugs = params.slug;

  
    return {
      props: {
        tmdb: tmdb,
        slugs: slugs,
      },
    };
  };
  