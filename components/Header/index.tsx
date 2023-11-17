import React from "react";
import * as S from './style';
import { Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Header({black} : any) {

    return (

        <>
          {black ? (
            <S.BlackHead>
                <S.HeaderLogo>
                  <Link href="/">
                      <Image src="https://t2.tudocdn.net/178296?w=660&h=660" alt="Netflix" />
                  </Link>
                </S.HeaderLogo>

                <S.Headeruser>
                  <Link href="/">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="User"/>
                  </Link>
                </S.Headeruser>
            </S.BlackHead>
          ) : (
            <S.HeaderBlack>
              <S.HeaderLogo>
                <Link href="/">
                    <Image src="https://t2.tudocdn.net/178296?w=660&h=660" alt="Netflix" />
                </Link>
              </S.HeaderLogo>

              <S.Headeruser>
                <Link href="/">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="User"/>
                </Link>
              </S.Headeruser>
            </S.HeaderBlack>
          )}
           
        </>


    )
}