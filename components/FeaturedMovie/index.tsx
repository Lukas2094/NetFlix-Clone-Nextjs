import React from "react";
import * as S from './style';

export default function FeaturedMovie({item} : any) {

    let firstdate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0 , 200) + '...'
    }

    return (
        <S.ContainerFeatured style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>

            <S.ContainVertical>
                <S.ContainHorizontal>
                    <S.ContentName>{item.original_name}</S.ContentName>
                    <S.ContentInfo>
                        <S.ContainerSeasonsYear><S.FeaturedPoints>{item.vote_average} pontos</S.FeaturedPoints></S.ContainerSeasonsYear>
                        <S.ContainerSeasonsYear>{firstdate.getFullYear()}</S.ContainerSeasonsYear>
                        <S.ContainerSeasonsYear>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</S.ContainerSeasonsYear>
                    </S.ContentInfo>

                    <S.FeaturedDescription>{description}</S.FeaturedDescription>
                
                     <S.FeaturedButton>
                        <S.MyView href={`/watch/${item.id}`}>► Assistir</S.MyView>
                        <S.MyList href={`/list/add/${item.id}`}>+ Minha Lista</S.MyList>
                     </S.FeaturedButton>

                     <S.Generos><strong>Gêneros:</strong> {genres.join(', ')}</S.Generos>
                </S.ContainHorizontal>
            </S.ContainVertical>

        </S.ContainerFeatured>
    )
}