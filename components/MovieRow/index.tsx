import React , {useState} from "react";
import * as S from './style';
import { IoIosArrowForward , IoIosArrowBack  } from "react-icons/io";
import { Image } from "@chakra-ui/react";

export default function MovieRow({title , items} : any) {
    const [scrollX , setScrollX] = useState(-400);

    const handLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
           x = 0;
        }
        setScrollX(x);
    }

    const handRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;      
        if((window.innerWidth - listW) > x) {
           x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <S.MovieRowContainer>
            <h2>{title}</h2>
             
             <S.ArrowLeft onClick={handLeftArrow}>
                <IoIosArrowBack />
             </S.ArrowLeft>
             
             <S.ArrowRight onClick={handRightArrow}>
                <IoIosArrowForward />
             </S.ArrowRight>

             <S.MovieRowListArea>
                <S.MovieRowList style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item: any , key : any) => (
                        <S.MovieRowItem key={key} >
                             <Image src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </S.MovieRowItem>
                    ))}
                </S.MovieRowList>
             </S.MovieRowListArea>
        </S.MovieRowContainer>
    )
}